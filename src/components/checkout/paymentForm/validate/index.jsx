import * as Yup from "yup";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;

  export const PaymentSchema = Yup.object().shape({
  name: Yup.string()
    .required("Bắt buộc")
    .min(6, "Tối thiểu 6 ký tự")
    .max(30, "Quá dài"),
    email: Yup.string().email("Sai định dạng").required("Bắt buộc"),
    phone: Yup.string()
    .matches(phoneRegExp, "Sai định dạng")
    .required("Bắt buộc"),
    address: Yup.string()
    .required("Bắt buộc")
    .min(10, "Tối thiểu 10 ký tự")
});
