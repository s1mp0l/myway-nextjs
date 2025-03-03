"use client";

import React, {memo, useEffect, useState} from "react";
import {SelectPersonTab} from "@/components/booking/booking-form/select-person-tab";
import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {SelectServiceTab} from "@/components/booking/booking-form/select-service-tab";
import {SelectTimeTab} from "@/components/booking/booking-form/select-time-tab";
import {IYBasicData, IYDatesResponse, IYTimesResponse} from "data/model/yclients/model";
import useMediaQuery from "@/lib/hooks/use-media-query";
import CurrentSelectedDesktop from "@/components/booking/booking-form/current-selected-desktop";
import CurrentSelectedMobile from "@/components/booking/booking-form/current-selected-mobile";
import {FinalizeForm} from "@/components/booking/booking-form/finalize-form";
import {
  getAllAvailableDates,
  getAllAvailableServices,
  getAllAvailableTimes
} from "../../../data/queries/yclients/service";

interface IBookingFormProps {
  data: IYBasicData;
}

const BookingForm = memo<IBookingFormProps>(({
                                               data
                                             }) => {
  const {isMobile} = useMediaQuery();
  const [tabIndex, setTabIndex] = useState(0);
  const [isFinalize, setFinalize] = useState(false);

  const tabClassname = " h-[48px] grid place-content-center uppercase  border-c-bg-1 border-x";
  const tabDisabledClassname = " uppercase opacity-[0.4]";
  const tabActiveClassname = "font-medium bg-c-bg-1 border-b-c-primary border-b-[3px] uppercase";
  const panelClassName = `w-full overflow-auto p-4`;

  const [currentDates, setCurrentDates] = useState<IYDatesResponse | null>(null);
  const [currentTimes, setCurrentTimes] = useState<IYTimesResponse | null>(null);

  const [selectedMaster, setSelectedMaster] = useState<number | null>(null);
  const [selectedServices, setSelectedServices] = useState<number[]>([]);
  const [dateTime, setDateTime] = useState<Date | null>(null);

  useEffect(() => {
    if (!selectedMaster || !data) return;
    const fetchData = async () => {
      data.services = await getAllAvailableServices({
        staff_id: selectedMaster.toString()
      })
    }

    fetchData();
    setSelectedServices([]);
  }, [selectedMaster, data])

  useEffect(() => {
    if (!selectedMaster || !data || !selectedServices.length) return;
    const fetchData = async () => {
      setCurrentDates(await getAllAvailableDates({
        "service_ids[]": selectedServices.toString(),
        "staff_id": selectedMaster.toString()
      }));
    }

    fetchData();
  }, [selectedMaster, selectedServices, data])

  useEffect(() => {
    const fetchData = async () => {
      if (!selectedMaster || !data || !selectedServices.length || !dateTime) return;
      const times = await getAllAvailableTimes(selectedMaster.toString(), dateTime, {
        "service_ids[]": selectedServices.toString(),
      });

      setCurrentTimes(times);
    }

    fetchData();
  }, [selectedMaster, selectedServices, data, dateTime])

  const handleNextStep = () => tabIndex < 2
    ? setTabIndex(prev => prev + 1)
    : () => {
    };

  return (
    <div
      className={`w-full flex flex-col justify-center gap-16 px-4 ${isMobile ? "pt-[80px] h-[100dvh]" : "h-[80dvh]"}`}>
      {!isFinalize
        ? <Tabs
          selectedIndex={tabIndex}
          onSelect={(index) => setTabIndex(index)}
          className={"h-full flex flex-col gap-2"}
          selectedTabClassName={tabActiveClassname}
          selectedTabPanelClassName={panelClassName}
        >
          <TabList className={"grid grid-flow-col auto-cols-[1fr] text-center "}>
            <Tab className={tabClassname}>
              Специалисты
            </Tab>
            <Tab className={tabClassname} disabled={!selectedMaster} disabledClassName={tabDisabledClassname}>
              Услуги
            </Tab>
            <Tab className={tabClassname} disabled={!selectedMaster || !selectedServices.length}
                 disabledClassName={tabDisabledClassname}>
              Дата и время
            </Tab>
          </TabList>
          <div className={`flex ${isMobile ? "flex-col h-[85%]" : ""} w-full`}>
            {(selectedMaster || selectedServices.length || dateTime)
              ? (isMobile
                ? <CurrentSelectedMobile
                  data={data}
                  selectedMaster={selectedMaster}
                  selectedServices={selectedServices}
                  dateTime={dateTime}
                  handleNextStep={handleNextStep}
                  setFinalize={setFinalize}
                /> : <CurrentSelectedDesktop
                  data={data}
                  selectedMaster={selectedMaster}
                  selectedServices={selectedServices}
                  dateTime={dateTime}
                  handleNextStep={handleNextStep}
                  setFinalize={setFinalize}
                />)
              : null
            }
            <TabPanel>
              <SelectPersonTab
                selectedMaster={selectedMaster}
                setSelectedMaster={setSelectedMaster}
                masters={data.masters}
              />
            </TabPanel>
            <TabPanel>
              <SelectServiceTab
                YCategoriesWithServices={data.services}
                selectedServices={selectedServices}
                selectCallBack={setSelectedServices}
              />
            </TabPanel>
            <TabPanel>
              <SelectTimeTab
                data={data}
                currentDates={currentDates}
                currentTimes={currentTimes}
                dateTime={dateTime}
                setDateTime={setDateTime}
              />
            </TabPanel>
          </div>
        </Tabs>
        : <FinalizeForm
          data={data}
          setFinalize={setFinalize}
          selectedMaster={selectedMaster}
          selectedServices={selectedServices}
          dateTime={dateTime}
        />
      }
    </div>
  );
})
BookingForm.displayName = "BookingForm";

export {BookingForm};