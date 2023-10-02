import React, { useState } from "react";
import "../../styling/Admission.css";
import { BiRightArrowAlt } from "react-icons/bi";
import Navbar from "../../../components/Navbar";
import Footer from "../../../components/Footer";

function ApplicationGuide() {
  return (
    <div>
      <Navbar />
      <div className="ikenna-funding-first-div">
        <h1 className="ikenna-funding-first-h1">Application Guide</h1>
      </div>
      <div>
        <div className="ikenna-student-affairs-scrolling-div ikenna-maps-address">
          <div className="ikenna-maps-address-first-div">
            <div>
              <h2 className="ikenna-acc-h">
                Important note on published information
              </h2>
              <p className="ikenna-acc-p">
                This Application Guide and the Undergraduate Admissions webpages
                are definitive and contain the most current and comprehensive
                information about the admissions process and requirements. These
                may be subject to change and you should consider the version
                currently available online to be the definitive source of
                information at any given time.{" "}
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">How to Apply</h2>
              <p className="ikenna-acc-p">
                To bring about ease and simplicity to our application process,
                we have made provisions for two methods of application that can
                be carried out in the comfort of your home.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Applying Online</h2>
              <p className="ikenna-acc-p">
                Click the button below to apply. Details on the entry
                requirements can be found on the "Documents" link on the top of
                this page.
              </p>
              <div
                style={{
                  marginTop: "32px",
                  marginBottom: '64px',
                }}
              >
                <span className="ikenna-funding-span">
                  Apply Now <BiRightArrowAlt />
                </span>
              </div>
            </div>
            <div>
              <h2 className="ikenna-acc-h">When to Apply</h2>
              <p className="ikenna-acc-p">
                Hensard University does not use application deadlines. This
                means that you can apply for admission all the time. Before you
                start your application, you need to ensure that your application
                and all supporting documents are ready.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Applying to more than one course</h2>
              <p className="ikenna-acc-p">
                You can submit multiple applications to different courses, but
                please do not accept any offer until you have received a
                decision from all the programmes you have applied for. When you
                have received all decisions from the university please make sure
                you accept only one offer as soon as possible.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Choosing your course</h2>
              <p className="ikenna-acc-p">
                In choosing your course, read the course page carefully to make
                sure that you meet the entry requirements, as admissions to Baze
                are highly competitive, and that you are familiar with the
                structure and content of the course (for transfer students). The
                course pages will show whether your preferred course is
                currently accepting applications for your selected entry
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">
                Studying at more than one institution
              </h2>
              <p className="ikenna-acc-p">
                You cannot undertake full-time study at Baze University whilst
                registered in another course at Baze or at another institution,
                either in Nigeria or worldwide. If you are registered at another
                institution when you apply to Baze for full-time study, as a
                condition of your offer you would be required to suspend or
                terminate your registration whilst studying at Baze, unless the
                registration is part of a formal collaborative agreement between
                Baze and the other institution.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Completing your application</h2>
              <p className="ikenna-acc-p">
                We will handle your application in accordance with the Nigeria
                Data Protection Act of 1998 and the declaration that you are
                required to sign before submitting your application will give
                you information on any third parties with whom we may need to
                share your data as part of the processing and assessment of your
                application. In your application you may nominate a third party,
                such as a relative, for the purposes of handling your
                application. We will not discuss your application with anyone
                else unless you nominate a representative in this section.
                Anyone you appoint will be able to request information and give
                us instructions relating to your application.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Submitting your application</h2>
              <p className="ikenna-acc-p">
                When you submit your application you will be required to sign a
                declaration confirming that all information provided is - to the
                best of your knowledge - true, accurate, current and complete,
                and that you will promptly notify the University should any
                information change. You will also confirm that the information
                contained in your application, including all supporting work, is
                entirely your own original work, except where clearly indicated,
                and does not contain any plagiarised elements.
              </p>
            </div>
            <div>
              <h2 className="ikenna-acc-h">Assessment of your application</h2>
              <p className="ikenna-acc-p">
                You will receive an email notification from the Undergraduate
                Admissions office once your application has been sent to the
                department for assessment. Usually this notification is sent
                within a few working days. Whilst the department will start to
                assess your application once you have completed and submitted
                the application form, you may be requested to submit additional
                documents for your application to be fully assessed and a final
                decision to be made. You will be notified of the outcome of your
                application by the department, usually around one to two weeks
                from your submission date.
              </p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ApplicationGuide;
