import * as yup from "yup";

export const schema = yup.object({
    title: yup.string().max(30).required("field is require"),
    description: yup.string().max(50).required("field is require"),
});
