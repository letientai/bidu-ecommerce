import * as Yup from "yup";

const phoneRegExp =
  /^(\+?\d{0,4})?\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{3}\)?)\s?-?\s?(\(?\d{4}\)?)?$/;
// const number = /^[0-9]{9,12}$/i;

export const RegisterSchema = Yup.object().shape({
  // password: Yup.string()
  //   .required("Bắt buộc")
  //   .min(6, "Tối thiểu 6 ký tự")
  //   .max(30, "Quá dài"),

  username: Yup.string().required("Bắt buộc").min(6, "Tối thiểu 6 ký tự"),
  email: Yup.string().email("Sai định dạng").required("Bắt buộc"),
  password: Yup.string().required("Bắt buộc").min(6, "Mật Khẩu phải từ 8-16 kí tự"),
  // .matches(
  //   /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*()_+])/,
  //   "Mật Khẩu phải từ 8-16 kí tự, bao gồm chữ cái in hoa, chữ cái in thường, ký tự đặc biệt và con số."
  // ),
  password_confirm: Yup.string()
    .required("Bắt buộc")
    .oneOf([Yup.ref("password"), null], "Không trùng"),
  // gender: Yup.string()
  //   .oneOf(["1", "2", "3"], "Bạn không thể để trống Field này")
  //   .required(Messages.bat_buoc),
  // birthday: Yup.string().nullable(),
  phone: Yup.string()
    .matches(phoneRegExp, "Sai định dạng")
    .required("Bắt buộc"),
});
