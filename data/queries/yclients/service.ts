import {COMPANY_ID, DEFAULT_HEADERS, getHeadersWithUserToken, YCLIENTS_URL} from "../../model/yclients/constants";
import {requestWrapper, requestWrapperWithMeta} from "../../model/yclients/utils";
import {
  IYCheckBookRecordBody,
  IYCheckBookRecordResponse,
  IYCreateBookRecordBody,
  IYCreateBookRecordResponse,
  IYDatesResponse,
  IYMastersResponse,
  IYNearestSeancesResponse,
  IYServicesResponse,
  IYTimesResponse
} from "../../model/yclients/model";
import {getISODate} from "@/lib/utils";

const getAllAvailableServicesCategories = async () => requestWrapper(fetch(
  `${YCLIENTS_URL}/service_categories/${COMPANY_ID}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS
  }
));

const getAllAvailableServices = async (queryParams?: Record<string, string>) => requestWrapper(fetch(
  `${YCLIENTS_URL}/book_services/${COMPANY_ID}?${queryParams ? new URLSearchParams(queryParams) : ""}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS,
  }
)) as never as Promise<IYServicesResponse>;

const getAllAvailableMasters = async () => requestWrapper(fetch(
  `${YCLIENTS_URL}/book_staff/${COMPANY_ID}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS
  }
)) as never as Promise<IYMastersResponse>;

const getBookDateDefaultParams = () => {
  const nowString = new Date(Date.now()).toISOString().slice(0, 10);

  return {
    date: "",
    date_from: nowString,
    date_to: "9999-01-01"
  }
}

const getAllAvailableDates = async (queryParams?: Record<string, string>) => requestWrapper(fetch(
  `${YCLIENTS_URL}/book_dates/${COMPANY_ID}?${queryParams ? new URLSearchParams({...getBookDateDefaultParams(), ...queryParams}) : ""}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS
  }
)) as never as Promise<IYDatesResponse>;

const getAllAvailableTimes = async (staffId: string, date: Date, queryParams?: Record<string, string>) => requestWrapper(fetch(
  `${YCLIENTS_URL}/book_times/${COMPANY_ID}/${staffId}/${getISODate(date)}?${queryParams ? new URLSearchParams(queryParams) : ""}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS
  }
)) as never as Promise<IYTimesResponse>;

const getNearestAvailableSeances = async (staffId: string, queryParams?: Record<string, string>) => requestWrapper(fetch(
  `${YCLIENTS_URL}/book_staff_seances/${COMPANY_ID}/${staffId}?${queryParams ? new URLSearchParams(queryParams) : ""}`,
  {
    method: "GET",
    headers: DEFAULT_HEADERS
  }
)) as never as Promise<IYNearestSeancesResponse>;

const createBookRecord = async (body: IYCreateBookRecordBody) => requestWrapperWithMeta(fetch(
  `${YCLIENTS_URL}/book_record/${COMPANY_ID}`,
  {
    method: "POST",
    headers: getHeadersWithUserToken(),
    body: JSON.stringify(body)
  }
)) as never as Promise<IYCreateBookRecordResponse>;

const checkBookRecord = async (body: IYCheckBookRecordBody) => requestWrapperWithMeta(fetch(
  `${YCLIENTS_URL}/book_check/${COMPANY_ID}`,
  {
    method: "POST",
    headers: DEFAULT_HEADERS,
    body: JSON.stringify(body)
  }
)) as never as Promise<IYCheckBookRecordResponse>;

export {
  getAllAvailableServicesCategories,
  getAllAvailableServices,
  getAllAvailableMasters,
  getAllAvailableDates,
  getAllAvailableTimes,
  getNearestAvailableSeances,
  createBookRecord,
  checkBookRecord,
};