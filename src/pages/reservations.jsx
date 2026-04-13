import React from 'react';
import {useForm} from 'react-hook-form';
import {object, string, number, boolean} from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {Col, Row} from "react-bootstrap";

const Reservations = () => {

    const validationSchema = object({
        name: string()
            .min(1, "Must be at least 1 character.")
            .required("Field is required."),
        email: string()
            .email("Invalid email format")
            .required("Field is required."),
        party_size: number()
            .transform((value) => (isNaN(value) ? undefined : value))
            .min(1, "Party size must be between 1 and 8.")
            .max(8, "Party size must be between 1 and 8.")
            .required("Field is required."),
        date: string()
            .required("Date is required."),
        reservation_time: string()
            .required("Time is required."),
        seating_preference: string()
            .required("Please select a preference."),
        dietary_restrictions: string(),
        newsletter: boolean(),
    });

    const {
        register,
        handleSubmit,
        setValue,
        reset,
        formState: {errors},
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            seating_preference: "Dog Kennel",
            newsletter: false,
            party_size: 1
        }
    });

    const onSubmit = (data) => {
        console.log("Reservation Submitted:");
        console.log("Form Data:", data);
    };

    const handleChange = (event) => {
        setValue(event.target.name, event.target.value)
        console.log("Keyboard press")
    }

    return (
        <div className="container mt-4">
            <Row>
                <Col lg={4}>
                    <h1>Reservations</h1>
                    <p>Reservations are at request only. Fill out the form below to book a table.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                        {/* Name Field */}
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input type="text" className="form-control" {...register("name")}
                                   placeholder={"John Doe"}
                                   onChange={handleChange}/>
                            {errors.name && <div className="text-danger">{errors.name.message}</div>}
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input type="email" className="form-control" {...register("email")}
                                   placeholder={"john.doe@email.com"}
                                   onChange={handleChange}/>
                            {errors.email && <div className="text-danger">{errors.email.message}</div>}
                        </div>

                        {/* Party Size */}
                        <div className="mb-3">
                            <label className="form-label">Party Size:</label>
                            <input type="number" className="form-control" {...register("party_size")}
                                   min={1}
                                   max={8}
                                   onChange={handleChange}
                            />
                            {errors.party_size && <div className="text-danger">{errors.party_size.message}</div>}
                        </div>

                        {/* Date & Time */}
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Date:</label>
                                <input type="date" className="form-control" {...register("date")}
                                       min={new Date().toISOString().split('T')[0]}
                                       placeholder={new Date().toISOString()}
                                       onChange={handleChange}/>
                                {errors.date && <div className="text-danger">{errors.date.message}</div>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Time:</label>
                                <input type="time" className="form-control" {...register("reservation_time")}
                                       onChange={handleChange}/>
                                {errors.reservation_time &&
                                    <div className="text-danger">{errors.reservation_time.message}</div>}
                            </div>
                        </div>

                        {/* Radio Buttons */}
                        <div className="mb-3">
                            <label className="form-label d-block">Seating Preference:</label>
                            {["Dog Kennel", "Indoor", "Outdoor"].map((option) => (
                                <div className="form-check form-check-inline" key={option}>
                                    <input
                                        className="form-check-input"
                                        type="radio"
                                        value={option}
                                        {...register("seating_preference")}
                                        onChange={handleChange}
                                    />
                                    <label className="form-check-label">{option}</label>
                                </div>
                            ))}
                            {errors.seating_preference &&
                                <div className="text-danger d-block">{errors.seating_preference.message}</div>}
                        </div>

                        {/* Dietary Restrictions */}
                        <div className="mb-3">
                            <label className="form-label">Dietary Restrictions:</label>
                            <input type="text-field" className="form-control" {...register("dietary_restrictions")}
                                   onChange={handleChange}/>
                        </div>

                        {/* Newsletter Checkbox */}
                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" {...register("newsletter")}
                                   onChange={handleChange}/>
                            <label className="form-check-label">Sign up for newsletter?</label>
                        </div>

                        <div className="mt-4">
                            <button type="submit" className="btn btn-success me-2">Submit</button>
                            <button type="button" className="btn btn-danger" onClick={() => reset()}>Reset</button>
                        </div>
                    </form>
                </Col>
                <Col lg={8}>
                    <div className="row justify-content-center">
                        <div className="col-lg-8 col-sm-10 text-center">
                            <div className="container mb-3">
                                <img
                                    src='/images/img1.jpg'
                                    className="img-border img-fluid"
                                    alt="KBBQ Dinner"
                                    style={{maxWidth: '500px'}}
                                />
                            </div>

                            <div className="container">
                                <img
                                    src='/images/img2.jpg'
                                    className="img-border img-fluid"
                                    alt="KBBQ Dinner 2"
                                    style={{maxWidth: '500px'}}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    );
};

export default Reservations;