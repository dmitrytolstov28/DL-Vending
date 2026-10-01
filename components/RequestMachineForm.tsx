"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle2,
  LoaderCircle,
} from "lucide-react";

import { supabase } from "@/lib/supabase";

type FormState = {
  venue_name: string;
  contact_name: string;
  email: string;
  phone: string;
  city: string;
  venue_type: string;
  message: string;
  website: string;
};

const initialForm: FormState = {
  venue_name: "",
  contact_name: "",
  email: "",
  phone: "",
  city: "",
  venue_type: "",
  message: "",
  website: "",
};

export default function RequestMachineForm() {
  const [form, setForm] =
    useState<FormState>(initialForm);

  const [loading, setLoading] =
    useState(false);

  const [success, setSuccess] =
    useState(false);

  const [error, setError] =
    useState("");

  function updateField(
    field: keyof FormState,
    value: string,
  ) {
    setForm((previous) => ({
      ...previous,
      [field]: value,
    }));
  }

  function validateForm() {
    if (
      !form.venue_name.trim() ||
      !form.contact_name.trim() ||
      !form.email.trim()
    ) {
      return "Please complete all required fields.";
    }

    const emailPattern =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailPattern.test(form.email)) {
      return "Please enter a valid email address.";
    }

    if (
      form.phone &&
      form.phone.replace(/\D/g, "").length < 10
    ) {
      return "Please enter a valid phone number.";
    }

    if (form.message.length > 1500) {
      return "Please keep your message under 1,500 characters.";
    }

    return "";
  }

  async function handleSubmit(
    event: React.FormEvent<HTMLFormElement>,
  ) {
    event.preventDefault();

    setError("");

    /*
      Honeypot:
      Real users never see or fill this field.
      Many spam bots will.
    */
    if (form.website) {
      setSuccess(true);
      return;
    }

    const validationError =
      validateForm();

    if (validationError) {
      setError(validationError);
      return;
    }

    setLoading(true);

    const { error: submitError } =
      await supabase.from("leads").insert([
        {
          venue_name:
            form.venue_name.trim(),
          contact_name:
            form.contact_name.trim(),
          email:
            form.email
              .trim()
              .toLowerCase(),
          phone:
            form.phone.trim() || null,
          city:
            form.city.trim() || null,
          venue_type:
            form.venue_type || null,
          message:
            form.message.trim() || null,
        },
      ]);

    if (submitError) {
      console.error(submitError);

      setError(
        "Something went wrong while submitting your request. Please try again or email us directly.",
      );

      setLoading(false);
      return;
    }

    setForm(initialForm);
    setSuccess(true);
    setLoading(false);
  }

  if (success) {
    return (
      <div className="success-card">
        <CheckCircle2 size={50} />

        <p className="section-eyebrow">
          Submission Complete
        </p>

        <h2 className="display-font">
          Request Received
        </h2>

        <p>
          Thank you for your interest in
          AfterHours Vending. Your venue
          information has been submitted
          successfully.
        </p>

        <button
          type="button"
          onClick={() =>
            setSuccess(false)
          }
          className="secondary-button"
        >
          Submit Another Venue
        </button>

        <style jsx>{`
          .success-card {
            padding: 58px 45px;

            border: 1px solid
              rgba(224, 180, 95, 0.3);
            border-radius: 15px;

            background:
              radial-gradient(
                circle at top,
                rgba(
                  224,
                  180,
                  95,
                  0.08
                ),
                transparent 42%
              ),
              linear-gradient(
                145deg,
                #111,
                #080808
              );

            text-align: center;
          }

          .success-card :global(svg) {
            margin-bottom: 20px;
            color: var(--gold-light);
          }

          .success-card h2 {
            margin: 10px 0 15px;

            font-size: clamp(
              2.5rem,
              5vw,
              3.4rem
            );

            font-weight: 500;
          }

          .success-card > p:last-of-type {
            max-width: 500px;

            margin: 0 auto 30px;

            color: #aaa69f;
            line-height: 1.75;
          }
        `}</style>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="request-form"
      noValidate
    >
      <div
        className="honeypot"
        aria-hidden="true"
      >
        <label>
          Website
          <input
            type="text"
            name="website"
            autoComplete="off"
            tabIndex={-1}
            value={form.website}
            onChange={(event) =>
              updateField(
                "website",
                event.target.value,
              )
            }
          />
        </label>
      </div>

      <div className="form-grid">
        <Field
          label="Venue Name"
          required
        >
          <input
            value={form.venue_name}
            onChange={(event) =>
              updateField(
                "venue_name",
                event.target.value,
              )
            }
            placeholder="Venue name"
            maxLength={120}
          />
        </Field>

        <Field
          label="Contact Name"
          required
        >
          <input
            value={form.contact_name}
            onChange={(event) =>
              updateField(
                "contact_name",
                event.target.value,
              )
            }
            placeholder="Your name"
            maxLength={120}
          />
        </Field>

        <Field
          label="Email"
          required
        >
          <input
            type="email"
            value={form.email}
            onChange={(event) =>
              updateField(
                "email",
                event.target.value,
              )
            }
            placeholder="name@venue.com"
            maxLength={180}
          />
        </Field>

        <Field label="Phone">
          <input
            type="tel"
            value={form.phone}
            onChange={(event) =>
              updateField(
                "phone",
                event.target.value,
              )
            }
            placeholder="Phone number"
            maxLength={30}
          />
        </Field>

        <Field label="City">
          <input
            value={form.city}
            onChange={(event) =>
              updateField(
                "city",
                event.target.value,
              )
            }
            placeholder="City"
            maxLength={120}
          />
        </Field>

        <Field label="Venue Type">
          <select
            value={form.venue_type}
            onChange={(event) =>
              updateField(
                "venue_type",
                event.target.value,
              )
            }
          >
            <option value="">
              Select venue type
            </option>

            <option value="Bar">
              Bar
            </option>

            <option value="Nightclub">
              Nightclub
            </option>

            <option value="Lounge">
              Lounge
            </option>

            <option value="Entertainment Venue">
              Entertainment Venue
            </option>

            <option value="Other">
              Other
            </option>
          </select>
        </Field>

        <div className="full-field">
          <Field label="Tell Us About Your Venue">
            <textarea
              rows={6}
              value={form.message}
              onChange={(event) =>
                updateField(
                  "message",
                  event.target.value,
                )
              }
              placeholder="Tell us about your venue, customer traffic, or possible machine location."
              maxLength={1500}
            />

            <div className="character-count">
              {form.message.length}
              /1500
            </div>
          </Field>
        </div>
      </div>

      {error && (
        <div
          className="form-error"
          role="alert"
        >
          {error}
        </div>
      )}

      <button
        type="submit"
        className="primary-button submit-button"
        disabled={loading}
      >
        {loading ? (
          <>
            <LoaderCircle
              size={18}
              className="loading-icon"
            />
            Sending Request
          </>
        ) : (
          <>
            Submit Request
            <ArrowRight size={18} />
          </>
        )}
      </button>

      <p className="form-note">
        Submission does not guarantee
        placement. Potential locations are
        reviewed for operational,
        regulatory, and compliance
        suitability.
      </p>

      <style jsx>{`
        .request-form {
          position: relative;

          padding: 42px;

          border: 1px solid
            rgba(224, 180, 95, 0.2);
          border-radius: 15px;

          background:
            radial-gradient(
              circle at 100% 0%,
              rgba(
                224,
                180,
                95,
                0.06
              ),
              transparent 30%
            ),
            linear-gradient(
              145deg,
              #111,
              #080808
            );
        }

        .honeypot {
          position: absolute !important;
          left: -9999px !important;
          width: 1px !important;
          height: 1px !important;
          overflow: hidden !important;
        }

        .form-grid {
          display: grid;
          grid-template-columns:
            repeat(2, 1fr);
          gap: 22px;
        }

        .full-field {
          grid-column: 1 / -1;
        }

        .character-count {
          margin-top: 6px;

          color: #696660;

          font-size: 0.68rem;

          text-align: right;
        }

        .form-error {
          margin-top: 22px;
          padding: 13px 15px;

          border: 1px solid
            rgba(255, 115, 115, 0.25);
          border-radius: 7px;

          background: rgba(
            150,
            20,
            20,
            0.09
          );

          color: #ffadad;

          font-size: 0.83rem;
          line-height: 1.55;
        }

        .submit-button {
          margin-top: 28px;

          border: 0;
          cursor: pointer;
        }

        .submit-button:disabled {
          opacity: 0.7;
          cursor: wait;
        }

        .form-note {
          max-width: 650px;

          margin: 18px 0 0;

          color: #77736e;

          font-size: 0.72rem;
          line-height: 1.65;
        }

        :global(.loading-icon) {
          animation:
            rotate
            1s
            linear
            infinite;
        }

        @keyframes rotate {
          to {
            transform: rotate(
              360deg
            );
          }
        }

        @media (
          max-width: 650px
        ) {
          .request-form {
            padding: 27px 20px;
          }

          .form-grid {
            grid-template-columns: 1fr;
          }

          .full-field {
            grid-column: auto;
          }

          .submit-button {
            width: 100%;
          }
        }
      `}</style>
    </form>
  );
}

function Field({
  label,
  required = false,
  children,
}: {
  label: string;
  required?: boolean;
  children: React.ReactNode;
}) {
  return (
    <label className="field">
      <span>
        {label}

        {required && (
          <b> *</b>
        )}
      </span>

      {children}

      <style jsx>{`
        .field {
          display: flex;
          flex-direction: column;
          gap: 9px;
        }

        .field > span {
          color: #d8d3cb;

          font-size: 0.77rem;
          font-weight: 600;
          letter-spacing: 0.04em;
        }

        .field b {
          color: var(--gold-light);
        }

        .field :global(input),
        .field :global(select),
        .field :global(textarea) {
          width: 100%;

          border: 1px solid
            rgba(
              255,
              255,
              255,
              0.12
            );

          border-radius: 7px;

          outline: none;

          background: #0c0c0c;
          color: white;

          padding: 14px 15px;

          transition:
            border-color
              150ms ease,
            box-shadow
              150ms ease,
            background
              150ms ease;
        }

        .field :global(input),
        .field :global(select) {
          min-height: 50px;
        }

        .field :global(textarea) {
          resize: vertical;

          min-height: 145px;
        }

        .field
          :global(input::placeholder),
        .field
          :global(textarea::placeholder) {
          color: #63605c;
        }

        .field
          :global(input:focus),
        .field
          :global(select:focus),
        .field
          :global(textarea:focus) {
          border-color:
            rgba(
              224,
              180,
              95,
              0.75
            );

          box-shadow:
            0 0 0 3px
            rgba(
              224,
              180,
              95,
              0.08
            );

          background: #101010;
        }

        .field :global(select) {
          color-scheme: dark;
        }
      `}</style>
    </label>
  );
}