import React from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { object, string, number, date } from "yup";
// import { Button, TextField } from "@mui/material";
const FormYup = () => {
  let userSchema = object({
    name: string().required(),
    age: number().required().positive().integer(),
    email: string().email(),
    website: string().url().nullable(),
    createdOn: date().default(() => new Date()),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(userSchema),
  });
  const onSubmit = (data) => console.log(data);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <label>First Name</label>
          <input {...register("firstName")} />
          {errors.firstName && <p>{errors.firstName.message}</p>}
        </div>
        <div style={{ marginBottom: 10 }}>
          <label>Last Name</label>
          <input {...register("lastName")} />
          {errors.lastName && <p>{errors.lastName.message}</p>}
        </div>
        <div>
          <label>Age</label>
          <input type="number" {...register("age", { valueAsNumber: true })} />
          {errors.age && <p>{errors.age.message}</p>}
        </div>
        <div>
          <label>Website</label>
          <input {...register("website")} />
          {errors.website && <p>{errors.website.message}</p>}
        </div>
        <input type="submit" />
      </form>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <div>
          <TextField
            label="First Name"
            {...register("firstName")}
            error={Boolean(errors.firstName)}
            helperText={errors.firstName?.message}
          />
        </div>
        <div>
          <TextField
            label="Last Name"
            {...register("lastName")}
            error={Boolean(errors.lastName)}
            helperText={errors.lastName?.message}
          />
        </div>
        <div>
          <TextField
            label="Age"
            type="number"
            {...register("age", { valueAsNumber: true })}
            error={Boolean(errors.age)}
            helperText={errors.age?.message}
          />
        </div>
        <div>
          <TextField
            label="Website"
            {...register("website")}
            error={Boolean(errors.website)}
            helperText={errors.website?.message}
          />
        </div>
        <Button type="submit" variant="contained">
          Submit
        </Button>
      </form> */}
    </>
  );
};

export default FormYup;
