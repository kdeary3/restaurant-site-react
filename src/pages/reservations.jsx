import React, {useState} from 'react';
import {useForm} from 'react-hook-form';
import {object, string, number, boolean} from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {Button, Col, Row} from "react-bootstrap";
import {ReservationSubmissionConfirmation} from "../components/reservationmodal.jsx";

const Reservations = () => {
    const [reservationConfirmation, setReservationConfirmation] = useState(false);

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
        reset,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(validationSchema),
        defaultValues: {
            seating_preference: "Dog Kennel",
            newsletter: false,
            party_size: 1,
            date: new Date().toISOString().substring(0, 10),
            reservation_time: "19:30"
        }
    });

    const onSubmit = (data) => {
        console.log("Submission Success:", data);
        setReservationConfirmation(true);
    };

    return (
        <div className="container mt-4">
            <Row>
                <Col lg={6}>
                    <h1>Reservations</h1>
                    <p>Reservations are at request only. Fill out the form below to book a table.</p>

                    <form onSubmit={handleSubmit(onSubmit)} className="needs-validation">
                        {/* Name Field */}
                        <div className="mb-3">
                            <label className="form-label">Name:</label>
                            <input
                                type="text"
                                className={`form-control ${errors.name ? 'is-invalid' : ''}`}
                                {...register("name")}
                                placeholder="John Doe"
                            />
                            {errors.name && <div className="text-danger">{errors.name.message}</div>}
                        </div>

                        {/* Email Field */}
                        <div className="mb-3">
                            <label className="form-label">Email:</label>
                            <input
                                type="email"
                                className={`form-control ${errors.email ? 'is-invalid' : ''}`}
                                {...register("email")}
                                placeholder="john.doe@email.com"
                            />
                            {errors.email && <div className="text-danger">{errors.email.message}</div>}
                        </div>

                        {/* Party Size */}
                        <div className="mb-3">
                            <label className="form-label">Party Size:</label>
                            <input
                                type="number"
                                className={`form-control ${errors.party_size ? 'is-invalid' : ''}`}
                                {...register("party_size")}
                            />
                            {errors.party_size && <div className="text-danger">{errors.party_size.message}</div>}
                        </div>

                        {/* Date & Time */}
                        <div className="row">
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Date:</label>
                                <input
                                    type="date"
                                    className={`form-control ${errors.date ? 'is-invalid' : ''}`}
                                    {...register("date")}
                                    min={new Date().toISOString().split('T')[0]}
                                />
                                {errors.date && <div className="text-danger">{errors.date.message}</div>}
                            </div>
                            <div className="col-md-6 mb-3">
                                <label className="form-label">Time:</label>
                                <input
                                    type="time"
                                    className={`form-control ${errors.reservation_time ? 'is-invalid' : ''}`}
                                    {...register("reservation_time")}
                                />
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
                            <input
                                type="text"
                                className="form-control"
                                {...register("dietary_restrictions")}
                            />
                        </div>

                        {/* Newsletter Checkbox */}
                        <div className="form-check mb-3">
                            <input type="checkbox" className="form-check-input" {...register("newsletter")} />
                            <label className="form-check-label">Sign up for newsletter?</label>
                        </div>

                        {/* Buttons */}
                        <div className="mb-3">
                            <Button type="submit" variant="success" className="me-2">
                                <i className="fa-solid fa-check me-2"></i> Submit
                            </Button>
                            <Button type="button" variant="danger" onClick={() => reset()}>Reset</Button>
                        </div>

                        <ReservationSubmissionConfirmation
                            show={reservationConfirmation}
                            handleClose={() => {
                                setReservationConfirmation(false);
                                reset();
                            }}
                        />
                    </form>
                </Col>

                <Col lg={5} className="text-center">
                    <img src='/images/img1.jpg' className="img-fluid mb-3 img-border" alt="KBBQ"/>
                    <img src='/images/img2.jpg' className="img-fluid img-border" alt="KBBQ 2"/>
                </Col>
            </Row>
        </div>
    );
};

export default Reservations;