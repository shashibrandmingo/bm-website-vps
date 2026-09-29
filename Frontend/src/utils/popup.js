export const openEnquiryPopup = () => {
  window.dispatchEvent(new Event("open-enquiry-popup"));
};

export const openCareersPopup = () => {
  window.dispatchEvent(new Event("open-careers-popup"));
};
