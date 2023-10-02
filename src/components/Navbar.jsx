import { ArrowDown2, Hex } from "iconsax-react";
import NavLogo from "../assets/images/uniLOGO.png";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [animate, setAnimate] = useState(false);
  const [activeState, setActiveState] = useState(null);
  const navbarStructure = [
    {
      title: "About",
      path: "/about",
      subs: [
        {
          title: "Overview",
          description: "All you need to know about Hensard University",
          subsets: [
            {
              title: "About the University",
              path: "/about",
            },
            {
              title: "The Founder",
              path: "/founder",
            },
            {
              title: "Office of the Vice Chancellor",
              path: "/vcn",
            },
            {
              title: "Office of the DVC (Admin)",
              path: "/dvcn",
            },
            {
              title: "Office of the Registrar",
              path: "/registrar",
            },
            {
              title: "Human Resources Office",
              path: "/hr",
            },
            {
              title: "Our Campus",
              path: "/campus",
            },
            {
              title: "Location and Map",
              path: "/maps",
            },
          ],
        },
        {
          title: "Leadership",
          description: "See the people behind taking charge",
          subsets: [
            {
              title: "Board",
              path: "/boardd",
            },
            {
              title: "Management",
              path: "/mgt",
            },
            {
              title: "The Senate",
              path: "/senate",
            },
          ],
        },
        {
          title: "Media & Engagement",
          description: "Stay up-to-date with the current happenings",
          subsets: [
            {
              title: "Hensard in the Press",
              path: "/coming-soon",
            },
            {
              title: "Events",
              path: "/coming-soon",
            },
            {
              title: "MOUs & Partnerships",
              path: "/coming-soon",
            },
            {
              title: "News",
              path: "/news",
            },
            {
              title: "Gallery",
              path: "/galleryy",
            },
            {
              title: "Hensard TV",
              path: "/coming-soon",
            },
            {
              title: "Hensard Magazine",
              path: "/coming-soon",
            },
          ],
        },
      ],
    },
    {
      title: "Admissions",
      subs: [
        {
          title: "Admissions",
          description: "Join the Hensard university now",
          subsets: [
            {
              title: "Admissions",
              path: "/admissions",
            },
            {
              title: "Application Guide",
              path: "/application",
            },
            {
              title: "Course Finder",
              path: "/course-finder",
            },
          ],
        },
        {
          title: "Student Life",
          description: "View the life of a Hensard student",
          subsets: [
            {
              title: "Tuition Fees",
              path: "/tuition",
            },
            {
              title: "Accommodation",
              path: "/accomodation",
            },
            {
              title: "Feeding",
              path: "/feeding",
            },
            {
              title: "SIWES",
              path: "/SIWES",
            },
          ],
        },
      ],
    },
    {
      title: "Academics",
      subs: [
        {
          title: "Study Overview",
          description: "All you need to know about Hensard University",
          subsets: [
            {
              title: "Academic Calendar",
              path: "/academics",
            },
            {
              title: "Staff (Academic & Admin)",
              path: "/staff",
            },
            {
              title: "Undergraduate Studies",
              path: "/department",
            },
            {
              title: "Postgraduate Studies",
              path: "/coming-soon",
            },
            {
              title: "Foundation School",
              path: "/coming-soon",
            },
          ],
        },
      ],
    },
    {
      title: "Centres",
      subs: [
        {
          title: "Centre Overview",
          description: "All you need to know about Hensard University",
          subsets: [
            {
              title: "Hensard Centre for Maternal and Infant Health (HCMIH)",
              path: "/research-HCMIH",
            },
            {
              title: "Hensard Centre for Governance and Leadership (HCGL)",
              path: "/research-HCGL",
            },
            {
              title:
                "Hensard Centre for Geo-Sciences and Earth Research (HCGER)",
              path: "/research-HCGER",
            },
            {
              title:
                "Hensard Centre for Environmental and Climate Research (HCECR)",
              path: "/research-HCECR",
            },
            {
              title:
                "Hensard Centre for Science, Technology, and Innovation (HCSTI)",
              path: "/research-HCSTI",
            },
            {
              title: "Hensard Center for Culture and Language Studies (HCCLS)",
              path: "/research-HCCLS",
            },
          ],
        },
        {
          title: "Support for Centre & Research",
          description: "All you need to know about Hensard University",
          subsets: [
            {
              title: "Funding",
              path: "/funding",
            },
            {
              title: "Career Development",
              path: "/careers",
            },
            {
              title: "Collaborate with us",
              path: "/collaborate",
            },
            {
              title: "Research at Hensard University",
              path: "/centre-and-research",
            },
          ],
        },
      ],
    },
    {
      title: "Information",
      subs: [
        {
          title: "Information",
          description: "All you need to know about Hensard University",
          subsets: [
            {
              title: "Counselling Centre",
              path: "/counselling",
            },
            {
              title: "Faculties",
              path: "/departments",
            },
            {
              title: "Library",
              path: "/library",
            },
            {
              title: "Notices",
              path: "/coming-soon",
            },
            {
              title: "Student's Affairs",
              path: "/studentaffairs",
            },
            {
              title: "Conferences",
              path: "/coming-soon",
            },
            {
              title: "Hensard Journals",
              path: "/coming-soon",
            },
            {
              title: "FAQs",
              path: "/faqs",
            },
            {
              title: "News",
              path: "/news",
            },
            {
              title: "Hensard University Foundation",
              path: "/coming-soon",
            },
            {
              title: "Scholarship",
              path: "/funding",
            },
            {
              title: "Quick links",
              path: "/quicklinks",
            },
          ],
        },
      ],
    },
    {
      title: "Portals",
      subs: [
        {
          title: "Admissions Portal",
          description: "All you need to know about Hensard University",
          subsets: [
            {
              title: "New Student's Enrolment Portal",
              path: "/coming-soon",
            },
            {
              title: "Transcript Portal",
              path: "/coming-soon",
            },
            {
              title: "Student Portal",
              path: "/coming-soon",
            },
            {
              title: "Alumni Portal",
              path: "/coming-soon",
            },
            {
              title: "Payment Portal",
              path: "/coming-soon",
            },
            {
              title: "Webmail",
              path: "/coming-soon",
            },
            {
              title: "IT Help Desk",
              path: "/coming-soon",
            },
            {
              title: "e-Library",
              path: "/coming-soon",
            },
            {
              title: "Certificate Verification",
              path: "/coming-soon",
            },
            {
              title: "Staff Portal",
              path: "/coming-soon",
            },
            {
              title: "Foundation School",
              path: "/coming-soon",
            },
          ],
        },
      ],
    },
    {
      title: "Contact",
      subs: [
        {
          title: "Information",
          description: "All you need to know about Hensard University",
          subsets: [
            {
              title: "Map and Contact Information",
              path: "/maps",
            },
            {
              title: "Our Campus",
              path: "/campus",
            },
            {
              title: "Location",
              path: "/location",
            },
          ],
        },
      ],
    },
  ];
  const [activeLink, setActiveLink] = useState(navbarStructure[0]);
  const [activeSubLink, setActiveSubLink] = useState(
    navbarStructure[0].subs[0]
  );
  const makeActive = (index) => {
    setActiveLink(navbarStructure[index]);
    setActiveSubLink(navbarStructure[index].subs[0]);
  };
  const makeSubActive = (index) => {
    setActiveSubLink(activeLink.subs[index]);
  };
  useEffect(() => {
    // const body = document.querySelector('body');
    // const dropdown = document.querySelector('.hensard-is-dropdown');
    // body.addEventListener("click", () => {
    //     setAnimate(false);
    // });
    // dropdown.addEventListener("click", (e) => {
    //     e.stopPropagation();
    //     alert("lk");
    //     setAnimate(true);
    // });
  }, []);
  return (
    <>
      <nav className="hensard-navbar xui-container xui-d-flex xui-flex-ai-center xui-flex-jc-space-between">
        <div className="hensard-navbar-brand">
          <img className="xui-img-75" src={NavLogo} alt="logo" />
        </div>
        <div className="hensard-navbar-links">
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            {navbarStructure.map((mlink, index) => {
              const mainPath = mlink.path;
              console.log(mainPath);
              return (
                <>
                  <li
                    className={
                      "hensard-is-dropdown " + (animate ? "animate" : null)
                    }
                  >
                    <a
                      className={
                        "xui-d-inline-flex xui-flex-ai-center xui-cursor-pointer " +
                        (activeState == index ? "active" : null)
                      }
                      onClick={() => {
                        makeActive(index);
                        setAnimate(true);
                        setActiveState(index);
                      }}
                    >
                      <span className="xui-d-inline-block xui-mr-half">
                        {mlink.title}
                      </span>
                      <ArrowDown2
                        size={14}
                        variant="Bold"
                        color="currentColor"
                      />
                    </a>
                    <div
                      className="hensard-navbar-dropdown xui-box-shadow"
                      onMouseLeave={() => {
                        setAnimate(false);
                        setActiveState(null);
                      }}
                    >
                      <div className="hensard-navbar-dropdown-links-box">
                        {activeLink.subs.map((link, index) => (
                          <>
                            <a
                              onClick={() => {
                                makeSubActive(index);
                              }}
                              className={
                                "hensard-navbar-dropdown-link xui-d-flex " +
                                (activeLink.subs[index].title ===
                                activeSubLink.title
                                  ? "is-active"
                                  : null)
                              }
                            >
                              <div className="hensard-navbar-dropdown-link-icon">
                                <Hex
                                  size={36}
                                  variant="Bulk"
                                  color="var(--blue)"
                                />
                              </div>
                              <div className="hensard-navbar-dropdown-link-dtls">
                                <h4>{link.title}</h4>
                                <p className="xui-font-sz-80 xui-opacity-5">
                                  {link.description}
                                </p>
                              </div>
                            </a>
                          </>
                        ))}
                      </div>
                      <div className="hensard-dropdown-sub-link-box">
                        <div className="xui-d-grid xui-lg-grid-col-3 xui-grid-gap-2">
                          {activeSubLink.subsets.map((link) => (
                            <>
                              <Link
                                to={`${link.path}`}
                                onClick={() => {
                                  setAnimate(false);
                                  setActiveState(null);
                                }}
                                className="hensard-navbar-dropdown-link"
                              >
                                <div className="hensard-navbar-dropdown-link-dtls">
                                  <h4>{link.title}</h4>
                                </div>
                              </Link>
                            </>
                          ))}
                        </div>
                      </div>
                    </div>
                  </li>
                </>
              );
            })}
          </ul>
        </div>
      </nav>
      <section style={{ marginBottom: "var(--navbar-height)" }}></section>
    </>
  );
};

export default Navbar;
