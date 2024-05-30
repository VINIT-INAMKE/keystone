class OutHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = ` <nav class="nav container">
      <div class="nav__data">
        <a href="/" class="nav__logo">
          <img src="./images/kslogo.png" alt="" />
        </a>
        <!-- <img class="naac" src="./images/naac.jpg" alt="" /> -->
        <div class="nav__toggle" id="nav-toggle">
          <i class="ri-menu-3-line nav__toggle-menu"></i>
          <i class="ri-close-line nav__toggle-close"></i>
        </div>
      </div>

      <!--=============== NAV MENU ===============-->
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              About <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <!--<div class="dropdown__icon">
                            <i class="ri-flashlight-line"></i>
                            </div>-->

                  <span class="dropdown__title">About Us</span>

                  <ul class="dropdown__list">
                    <li>
                      <a
                        href="./about/collegeprofile.html"
                        class="dropdown__link"
                        >About KSE</a
                      >
                    </li>

                    
                    <li>
                      <a
                        href="./about/directordesk.html"
                        class="dropdown__link"
                      >
                        From the Desk Of Directors
                      </a>
                    </li> <li>
                      <a
                        href="./about/principalsdesk.html"
                        class="dropdown__link"
                      >
                        From the Desk Of Principal
                      </a>
                    </li>
                    <li>
                      <a href="./about/keypersons.html" class="dropdown__link"
                        >Management</a
                      >
                    </li>
                    <li>
                      <a href="./about/whykeystone.html" class="dropdown__link"
                        >Why Keystone?</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <span class="dropdown__title">Examination Cell</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="./examination/dean.html" class="dropdown__link"
                        >From The Desk Of Dean</a
                      >
                    </li>
                    <li>
                      <a
                        href="./examination/rulesnregulations.html"
                        class="dropdown__link"
                        >Rules And Regulations</a
                      >
                    </li>
                    <li>
                      <a href="./examination/notice.html" class="dropdown__link"
                        >Examination Notice</a
                      >
                    </li>
                    <li>
                      <a
                        href="./examination/circulars.html"
                        class="dropdown__link"
                        >Examination Circulars</a
                      >
                    </li>
                    <li>
                      <a
                        href="./examination/timetables.html"
                        class="dropdown__link"
                        >Examination Timetables</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!--=============== DROPDOWN 1 ===============-->
          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              Admissions <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-community-line"></i>
                  </div>

                  <span class="dropdown__title">Admission Cell</span>

                  <ul class="dropdown__list">
                    <li>
                      <a
                        href="./admission/admissioncell.html"
                        class="dropdown__link"
                      >
                        Admission Cell
                      </a>
                    </li>
                    <li>
                      <a
                        href="./admission/programsoffered.html"
                        class="dropdown__link"
                      >
                        Programs Offered
                      </a>
                    </li>
                    <li>
                      <a
                        href="./admission/brochure.html"
                        class="dropdown__link"
                      >
                        Admission Brochure
                      </a>
                    </li>
                    <li>
                      <a
                        href="./admission/feestructure.html"
                        class="dropdown__link"
                      >
                        Fee Structure
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-community-line"></i>
                  </div>

                  <span class="dropdown__title">Admission Cell</span>

                  <ul class="dropdown__list">
                    <li>
                      <a
                        href="./admission/eligibility.html"
                        class="dropdown__link"
                      >
                        Admission Eligibility Criteria
                      </a>
                    </li>
                    <li>
                      <a
                        href="./admission/procedure.html"
                        class="dropdown__link"
                        >Admission Instructions and Procedure</a
                      >
                    </li>
                    <!-- <li>
                      <a href="./admission/notice.html" class="dropdown__link"
                        >Admission Notice</a
                      >
                    </li>-->
                    <li>
                      <a href="./admission/enquiry.html" class="dropdown__link"
                        >Admission Enquiry</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              Departments <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-community-line"></i>
                  </div>

                  <span class="dropdown__title">First Year</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="./FE/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="./FE/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a href="./FE/faculty.html" class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a href="./FE/syllabus.html" class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="./FE/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="./FE/academiccalender.html"
                        class="dropdown__link"
                      >
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a href="./FE/timetables.html" class="dropdown__link"
                        >Timetables</a
                      >
                    </li>
                    <li>
                      <a href="./FE/association.html" class="dropdown__link"
                        >Student Associations</a
                      >
                    </li>

                    <li>
                      <a href="./FE/results.html" class="dropdown__link">
                        Academic Toppers</a
                      >
                    </li>
                  </ul>
                </div>

                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-computer-line"></i>
                  </div>

                  <span class="dropdown__title">Computer</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="./Comp/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="./Comp/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a href="./Comp/faculty.html" class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a href="./Comp/syllabus.html" class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="./Comp/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="./Comp/academiccalender.html"
                        class="dropdown__link"
                      >
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a href="./Comp/timetables.html" class="dropdown__link"
                        >Timetables</a
                      >
                    </li>
                    <li>
                      <a href="./Comp/association.html" class="dropdown__link"
                        >Student Associations</a
                      >
                    </li>
                    <li>
                      <a href="./Comp/studentclubs.html" class="dropdown__link"
                        >Student Clubs</a
                      >
                    </li>
                    <li>
                      <a
                        href="./Comp/collegemagazine.html"
                        class="dropdown__link"
                        >Department Magazine</a
                      >
                    </li>

                    <li>
                      <a href="./Comp/results.html" class="dropdown__link">
                        Academic Toppers</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-ram-line"></i>
                  </div>

                  <span class="dropdown__title">ENTC</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="./ENTC/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="./ENTC/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a href="./ENTC/faculty.html" class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a href="./ENTC/syllabus.html" class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="./ENTC/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="../ENTC/academiccalender.html"
                        class="dropdown__link"
                      >
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a href="./ENTC/timetables.html" class="dropdown__link"
                        >Timetables</a
                      >
                    </li>
                    <li>
                      <a href="./ENTC/association.html" class="dropdown__link"
                        >Student Associations</a
                      >
                    </li>

                    <li>
                      <a href="./ENTC/results.html" class="dropdown__link">
                        Academic Toppers</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-tools-line"></i>
                  </div>

                  <span class="dropdown__title">Mechanical</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="./Mechanical/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="./Mechanical/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a href="./Mechanical/faculty.html" class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a
                        href="./Mechanical/syllabus.html"
                        class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="./Mechanical/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="./Mechanical/academiccalender.html"
                        class="dropdown__link"
                      >
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a
                        href="./Mechanical/timetables.html"
                        class="dropdown__link"
                        >Timetables</a
                      >
                    </li>
                    <li>
                      <a
                        href="./Mechanical/association.html"
                        class="dropdown__link"
                        >Student Associations</a
                      >
                    </li>

                    <li>
                      <a
                        href="./Mechanical/results.html"
                        class="dropdown__link"
                      >
                        Academic Toppers</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-robot-2-line"></i>
                  </div>

                  <span class="dropdown__title">AI & DS</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="./AIDS/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="./AIDS/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a href="./AIDS/faculty.html" class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a href="./AIDS/syllabus.html" class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="./AIDS/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a href="../AIDS/about.html" class="dropdown__link">
                        Academic Calender
                      </a>
                    </li>
                    <!-- <li>
                                                <a href="./AIDS/timetables.html" class="dropdown__link">Timetables</a>
                                            </li>
                                            <li>
                                                <a href="./AIDS/association.html" class="dropdown__link">Student Associations</a>
                                            </li>
                                            <li>
                                                <a href="./AIDS/studentclubs.html" class="dropdown__link">Student Clubs</a>
                                            </li>
                                            <li>
                                                <a href="./AIDS/results.html" class="dropdown__link">
                                                    Academic Toppers</a>
                                            </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              Placements <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-code-line"></i>
                  </div>

                  <span class="dropdown__title"
                    >Training And Placements Department</span
                  >

                  <ul class="dropdown__list">
                    <li>
                      <a href="./t&p/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>
                    <li>
                      <a href="./t&p/dean.html" class="dropdown__link"
                        >Dean Desk</a
                      >
                    </li>
                    <li>
                      <a href="./t&p/coordinators.html" class="dropdown__link"
                        >Co-ordinators</a
                      >
                    </li>
                    <li>
                      <a href="./t&p/preplacement.html" class="dropdown__link"
                        >Preplacement Training Gallery</a
                      >
                    </li> 
                    
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              Industry Connect
              <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-code-line"></i>
                  </div>

                  <span class="dropdown__title"> Industry Connect </span>

                  <ul class="dropdown__list">
                    <li>
                      <a
                        href="./industryconnect/industryassociation.html"
                        class="dropdown__link"
                      >
                        Industry Association
                      </a>
                    </li>
                    <li>
                      <a
                        href="./industryconnect/industryvisit.html"
                        class="dropdown__link"
                      >
                        Industrial Visit
                      </a>
                    </li>
                    <li>
                      <a
                        href="./industryconnect/internship.html"
                        class="dropdown__link"
                        >Internships</a
                      >
                    </li>
                    <li>
                      <a href="./industryconnect/training.html" class="dropdown__link">Training</a>
                    </li><li>
                      <a href="./industryconnect/keyplacements.html" class="dropdown__link"
                        >Key Placements</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <!--=============== DROPDOWN 3 ===============-->
        </ul>
      </div>
    </nav>`;
  }
}
class InHeader extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `<nav class="nav container">
      <div class="nav__data">
        <a href="/" class="nav__logo">
          <img src="../images/kslogo.png" alt="" />
        </a>
        <!-- <img class="naac" src="../images/naac.jpg" alt="" /> -->
        <div class="nav__toggle" id="nav-toggle">
          <i class="ri-menu-3-line nav__toggle-menu"></i>
          <i class="ri-close-line nav__toggle-close"></i>
        </div>
      </div>

      <!--=============== NAV MENU ===============-->
      <div class="nav__menu" id="nav-menu">
        <ul class="nav__list">
          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              About <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <!--<div class="dropdown__icon">
                                  <i class="ri-flashlight-line"></i>
                                  </div>-->

                  <span class="dropdown__title">About Us</span>

                  <ul class="dropdown__list">
                    <li>
                      <a
                        href="../about/collegeprofile.html"
                        class="dropdown__link"
                        >About KSE</a
                      >
                    </li>
 <li>
                      <a
                        href="../about/directordesk.html"
                        class="dropdown__link"
                      >
                        From the Desk Of Directors
                      </a>
                    </li>
                    <li>
                      <a
                        href="../about/principalsdesk.html"
                        class="dropdown__link"
                        >From the Desk Of Principal</a
                      >
                    </li>
                   
                    <li>
                      <a href="../about/keypersons.html" class="dropdown__link"
                        >Management</a
                      >
                    </li>
                    <li>
                      <a href="../about/whykeystone.html" class="dropdown__link"
                        >Why Keystone?</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <span class="dropdown__title">Examination Cell</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="../examination/dean.html" class="dropdown__link"
                        >From The Desk Of Dean</a
                      >
                    </li>
                    <li>
                      <a
                        href="../examination/rulesnregulations.html"
                        class="dropdown__link"
                        >Rules And Regulations</a
                      >
                    </li>
                    <li>
                      <a
                        href="../examination/notice.html"
                        class="dropdown__link"
                        >Examination Notice</a
                      >
                    </li>
                    <li>
                      <a
                        href="../examination/circulars.html"
                        class="dropdown__link"
                        >Examination Circulars</a
                      >
                    </li>
                    <li>
                      <a
                        href="../examination/timetables.html"
                        class="dropdown__link"
                        >Examination Timetables</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>

          <!--=============== DROPDOWN 1 ===============-->
          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              Admissions <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-community-line"></i>
                  </div>

                  <span class="dropdown__title">Admission Cell</span>

                  <ul class="dropdown__list">
                    <li>
                      <a
                        href="../admission/admissioncell.html"
                        class="dropdown__link"
                        >Admission Cell</a
                      >
                    </li>
                    <li>
                      <a
                        href="../admission/programsoffered.html"
                        class="dropdown__link"
                      >
                        Programs Offered
                      </a>
                    </li>
                    <li>
                      <a
                        href="../admission/brochure.html"
                        class="dropdown__link"
                        >Admission Brochure</a
                      >
                    </li>
                    <li>
                      <a
                        href="../admission/feestructure.html"
                        class="dropdown__link"
                      >
                        Fee Structure
                      </a>
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-community-line"></i>
                  </div>

                  <span class="dropdown__title">Admission Cell</span>

                  <ul class="dropdown__list">
                    <li>
                      <a
                        href="../admission/eligibility.html"
                        class="dropdown__link"
                      >
                        Admission Eligibility Criteria
                      </a>
                    </li>
                    <li>
                      <a
                        href="../admission/procedure.html"
                        class="dropdown__link"
                        >Admission Instructions and Procedure</a
                      >
                    </li>
                    <!-- <li>
                        <a href="../admission/notice.html" class="dropdown__link"
                          >Admission Notice</a
                        >
                      </li> -->
                    <li>
                      <a
                        href="../admission/enquiry.html"
                        class="dropdown__link"
                      >
                        Admission Enquiry
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              Departments <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-community-line"></i>
                  </div>

                  <span class="dropdown__title">First Year</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="../FE/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="../FE/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a href="../FE/faculty.html" class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a href="../FE/syllabus.html" class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="../FE/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="../FE/academiccalender.html"
                        class="dropdown__link"
                      >
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a href="../FE/timetables.html" class="dropdown__link"
                        >Timetables</a
                      >
                    </li>
                    <li>
                      <a href="../FE/association.html" class="dropdown__link"
                        >Student Associations</a
                      >
                    </li>

                    <li>
                      <a href="../FE/results.html" class="dropdown__link">
                        Academic Toppers</a
                      >
                    </li>
                  </ul>
                </div>

                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-computer-line"></i>
                  </div>

                  <span class="dropdown__title">Computer</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="../Comp/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="../Comp/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a href="../Comp/faculty.html" class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a href="../Comp/syllabus.html" class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="../Comp/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="../Comp/academiccalender.html"
                        class="dropdown__link"
                      >
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a href="../Comp/timetables.html" class="dropdown__link"
                        >Timetables</a
                      >
                    </li>
                    <li>
                      <a href="../Comp/association.html" class="dropdown__link"
                        >Student Associations</a
                      >
                    </li>
                    <li>
                      <a href="../Comp/studentclubs.html" class="dropdown__link"
                        >Student Clubs</a
                      >
                    </li>
                    <li>
                      <a
                        href="../Comp/collegemagazine.html"
                        class="dropdown__link"
                        >Department Magazine</a
                      >
                    </li>

                    <li>
                      <a href="../Comp/results.html" class="dropdown__link">
                        Academic Toppers</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-ram-line"></i>
                  </div>

                  <span class="dropdown__title">ENTC</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="../ENTC/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="../ENTC/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a href="../ENTC/faculty.html" class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a href="../ENTC/syllabus.html" class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="../ENTC/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="../ENTC/academiccalender.html"
                        class="dropdown__link"
                      >
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a href="../ENTC/timetables.html" class="dropdown__link"
                        >Timetables</a
                      >
                    </li>
                    <li>
                      <a href="../ENTC/association.html" class="dropdown__link"
                        >Student Associations</a
                      >
                    </li>

                    <li>
                      <a href="../ENTC/results.html" class="dropdown__link">
                        Academic Toppers</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-tools-line"></i>
                  </div>

                  <span class="dropdown__title">Mechanical</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="../Mechanical/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="../Mechanical/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a
                        href="../Mechanical/faculty.html"
                        class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a
                        href="../Mechanical/syllabus.html"
                        class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="../Mechanical/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a
                        href="../Mechanical/academiccalender.html"
                        class="dropdown__link"
                      >
                        Academic Calender
                      </a>
                    </li>
                    <li>
                      <a
                        href="../Mechanical/timetables.html"
                        class="dropdown__link"
                        >Timetables</a
                      >
                    </li>
                    <li>
                      <a
                        href="../Mechanical/association.html"
                        class="dropdown__link"
                        >Student Associations</a
                      >
                    </li>

                    <li>
                      <a
                        href="../Mechanical/results.html"
                        class="dropdown__link"
                      >
                        Academic Toppers</a
                      >
                    </li>
                  </ul>
                </div>
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-robot-2-line"></i>
                  </div>

                  <span class="dropdown__title">AI & DS</span>

                  <ul class="dropdown__list">
                    <li>
                      <a href="../AIDS/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>

                    <li>
                      <a href="../AIDS/hod.html" class="dropdown__link"
                        >From the Desk of HOD</a
                      >
                    </li>
                    <li>
                      <a href="../AIDS/faculty.html" class="dropdown__link"
                        >Faculty</a
                      >
                    </li>
                    <li>
                      <a href="../AIDS/syllabus.html" class="dropdown__link"
                        >Syllabus</a
                      >
                    </li>
                    <li>
                      <a href="../AIDS/labs.html" class="dropdown__link"
                        >Laboratories</a
                      >
                    </li>
                    <li>
                      <a href="../AIDS/about.html" class="dropdown__link">
                        Academic Calender
                      </a>
                    </li>
                    <!-- <li>
                                                        <a href="../AIDS/timetables.html" class="dropdown__link">Timetables</a>
                                                    </li>
                                                    <li>
                                                        <a href="../AIDS/association.html" class="dropdown__link">Student Associations</a>
                                                    </li>
                                                    <li>
                                                        <a href="../AIDS/studentclubs.html" class="dropdown__link">Student Clubs</a>
                                                    </li>
                                                    <li>
                                                        <a href="../AIDS/results.html" class="dropdown__link">
                                                            Academic Toppers</a>
                                                    </li> -->
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              Placements <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-code-line"></i>
                  </div>

                  <span class="dropdown__title"
                    >Training And Placements Department</span
                  >

                  <ul class="dropdown__list">
                    <li>
                      <a href="../t&p/about.html" class="dropdown__link"
                        >About Department</a
                      >
                    </li>
                    <li>
                      <a href="../t&p/dean.html" class="dropdown__link"
                        >Dean Desk</a
                      >
                    </li>
                    <li>
                      <a href="../t&p/coordinators.html" class="dropdown__link"
                        >Co-ordinators</a
                      >
                    </li>
                    <li>
                      <a href="../t&p/preplacement.html" class="dropdown__link"
                        >Preplacement Training Gallery</a
                      >
                    </li>
                    
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <!-- <li class="dropdown__item">
              <div class="nav__link dropdown__button">
                Examination<i class="ri-arrow-down-s-line dropdown__arrow"></i>
              </div>
  
              <div class="dropdown__container">
                <div class="dropdown__content"></div>
              </div>
            </li> -->
          <li class="dropdown__item">
            <div class="nav__link dropdown__button">
              Industry Connect
              <i class="ri-arrow-down-s-line dropdown__arrow"></i>
            </div>

            <div class="dropdown__container">
              <div class="dropdown__content">
                <div class="dropdown__group">
                  <div class="dropdown__icon">
                    <i class="ri-code-line"></i>
                  </div>

                  <span class="dropdown__title"> Industry Connect </span>

                  <ul class="dropdown__list">
                    <li>
                      <a
                        href="../industryconnect/industryassociation.html"
                        class="dropdown__link"
                      >
                        Industry Association
                      </a>
                    </li>
                    <li>
                      <a
                        href="../industryconnect/industryvisit.html"
                        class="dropdown__link"
                      >
                        Industrial Visit
                      </a>
                    </li>
                    <li>
                      <a
                        href="../industryconnect/internship.html"
                        class="dropdown__link"
                      >
                        Internships
                      </a>
                    </li>
                    <li>
                      <a href="../industryconnect/training.html" class="dropdown__link">Training</a>
                    </li>
                    <li>
                      <a href="../industryconnect/keyplacements.html" class="dropdown__link"
                        >Key Placements</a
                      >
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </li>
          <!--=============== DROPDOWN 3 ===============-->
        </ul>
      </div>
    </nav>`;
  }
}

class InFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
    <div class="footer-left">
      <img src="../images/keystone.png" alt="" />
      <p>
        Keystone School Of Engineering, <br />
        Near Handewadi Chowk, <br />
        Urali Devachi, Shewalewadi, <br />
        Pune – 412308
      </p>
    </div>
    <ul class="footer-right">
      <li>
        <h2>About Keystone</h2>
        <ul class="footer-box">
          <li>
            <a href="../about/collegeprofile.html">Vision Mission</a>
          </li>
          <li>
            <a href="../about/recognition.html">Recognition</a>
          </li>
        </ul>
      </li>
      <li>
        <h2>Admission</h2>
        <ul class="footer-box">
          <li>
            <a href="../admission/brochure.html">Admission Brochure</a>
          </li>
          <li>
            <a href="../admission/feestructure.html">Fee Structure</a>
          </li>
          <li>
            <a href="../admission/procedure.html"
              >Admission Instruction and Procedure</a
            >
          </li>
         
          <li>
          <a href="../admission/enquiry.html">Enquiry</a>
        </li>
        </ul>
      </li>
      <li>
        <h2>Placement</h2>
        <ul class="footer-box">
          <li>
            <a href="../industryconnect/industryassociation.html">Our Recruiters</a>
          </li>
          <li>
            <a href="../industryconnect/keyplacements.html">Placements</a>
          </li>
          <li>
            <a href="../t&p/preplacement.html">Training</a>
          </li>
          <!-- <li>
            <a href="../AIDS/results.html"> Academic Toppers</a>
          </li> -->
        </ul>
      </li>
      <li>
        <h2>Life At Keystone</h2>
        <ul class="footer-box">
        <li>
              <a href="../studentscorner.html"> Students Corner</a>
            </li>
          
          <li>
            <a href="../dramaclub.html">Keystone Drama Club</a>
          </li>
          <li>
            <a href="../nss.html"> NSS </a>
          </li>
        </ul>
      </li>
    </ul>
    <div class="footer-bottom">
      <div class="social">
        <a href="../contactus.html" class="contactcl">Contact Us</a>
      </div>
      <div class="socials">
        <a href="#"><i class="ri-facebook-fill"></i> </a>
        <a href="#"><i class="ri-twitter-fill"></i></a>
        <a href="#"><i class="ri-youtube-fill"></i></a>
        <a href="#"><i class="ri-instagram-fill"></i></a>
        <a href="#"><i class="ri-whatsapp-fill"></i></a>
      </div>
      <p>
        Copyright &copy; 2012 - 2024 Shalakha Foundation. All rights reserved.
      </p>
    </div>
  </footer>
`;
  }
}

class OutFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
    <footer class="footer">
      <div class="footer-left">
        <img src="../images/keystone.png" alt="" />
        <p>
          Keystone School Of Engineering, <br />
          Near Handewadi Chowk, <br />
          Urali Devachi, Shewalewadi, <br />
          Pune – 412308
        </p>
      </div>
      <ul class="footer-right">
        <li>
          <h2>About Keystone</h2>
          <ul class="footer-box">
            <li>
              <a href="./about/collegeprofile.html">Vision Mission</a>
            </li>
            <li>
              <a href="./about/recognition.html">Recognition</a>
            </li>
          </ul>
        </li>
        <li>
          <h2>Admission</h2>
          <ul class="footer-box">
            <li>
              <a href="./admission/brochure.html">Admission Brochure</a>
            </li>
            <li>
              <a href="./admission/feestructure.html">Fee Structure</a>
            </li>
            <li>
              <a href="./admission/procedure.html"
                >Admission Instruction and Procedure</a
              >
            </li>
            
            <li>
            <a href="./admission/enquiry.html">Enquiry</a>
          </li>
          </ul>
        </li>
        <li>
          <h2>Placement</h2>
          <ul class="footer-box">
            <li>
              <a href="./industryconnect/industryassociation.html">Our Recruiters</a>
            </li>
            <li>
              <a href="./industryconnect/keyplacements.html">Placements</a>
            </li>
            <li>
              <a href="./t&p/preplacement.html">Training</a>
            </li>
            <!-- <li>
              <a href="../AIDS/results.html"> Academic Toppers</a>
            </li> -->
          </ul>
        </li>
        <li>
          <h2>Life At Keystone</h2>
          <ul class="footer-box">
            <li>
              <a href="./studentscorner.html"> Students Corner</a>
            </li>
            
            <li>
              <a href="./dramaclub.html">Keystone Drama Club</a>
            </li>
            <li>
              <a href="./nss.html"> NSS </a>
            </li>
          </ul>
        </li>
      </ul>
      <div class="footer-bottom">
        <div class="social">
          <a href="./contactus.html" class="contactcl">Contact Us</a>
        </div>
        <div class="socials">
          <a href="#"><i class="ri-facebook-fill"></i> </a>
          <a href="#"><i class="ri-twitter-fill"></i></a>
          <a href="#"><i class="ri-youtube-fill"></i></a>
          <a href="#"><i class="ri-instagram-fill"></i></a>
          <a href="#"><i class="ri-whatsapp-fill"></i></a>
        </div>
        <p>
          Copyright &copy; 2012 - 2024 Shalakha Foundation. All rights reserved.
        </p>
      </div>
    </footer>`;
  }
}
customElements.define("oute-header", OutHeader);
customElements.define("inn-header", InHeader);
customElements.define("inn-footer", InFooter);
customElements.define("oute-footer", OutFooter);
