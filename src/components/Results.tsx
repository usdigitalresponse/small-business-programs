// @ts-nocheck

import React, { useEffect , useState} from "react";
import { useLocation, useHistory } from "react-router-dom";
import PPPSection from './PayrollProtectionProgramSection'
import EIDLProgramSection from './EconomicInjuryDisasterLoanProgramSection'
import StatePrograms from './StatePrograms'
import Header from "./Header";
import Footer from "./Footer";
import Sidebar from "./Sidebar";
import Tabsbar from "./Tabsbar";
import { Helmet } from "react-helmet";
import { useFormDictionary, useForm } from "~/contexts/form";

import "./results.scss";
import "./index.scss";

const allNationalPrograms = [
   'ppp',
   'eidl',
   'sba-debt'
];

const allStatePrograms = [
  'ca_small_biz',
  'pitt_elf',
  'pitt_ura',
  'pitt_bridgeway',
  'pitt_kiva',
  'pitt_honeycomb',
  'hawaii_community',
  'hawaii_small_business',
  'hawaii_manufacturing',
  'hawaii_malama',
  'hawaii_hua'
]

const Results: React.FC = () => {
  const { search } = useLocation();
  const history = useHistory();
  const [back, next, complete] = useFormDictionary("back", "next", "complete");
  const [windowWidth, setWindowWidth] = useState(0);

  const updateDimensions = () => {
    let windowWidth = typeof window !== "undefined" ? window.innerWidth : 0;
    setWindowWidth(windowWidth);
  }

  useEffect(() => {
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
  }, []);

  const styles = {
    showFooterMenuText: windowWidth > 500,
    showSidebar: windowWidth > 768,
    sidebarWidth: windowWidth < 1100 ? 50 : 150,
    sidebarCollapsed: windowWidth < 1100
  };

  const {
    form: { results },
  } = useForm();

  // hacky port of raw js from previous results page, will redo with the new results page
  const eligibleProgramIds = new URLSearchParams(search).getAll("eligible")
  const filteredStatePrograms = results.filter(program => (eligibleProgramIds.includes(program.id) && allStatePrograms.includes(program.id)))
  const filteredNationalPrograms = results.filter(program => eligibleProgramIds.includes(program.id) && allNationalPrograms.includes(program.id));
  
  return (
    <div className="content-page">
    <Helmet>
      <meta property="og:title" content="COVID-19 SMB Loan Information" />
      <meta
        property="og:description"
        content="Learn about support programs available to help stabilize your business."
      />
      <title>COVID-19 SMB Loan Information</title>
      <meta
        name="Description"
        content="Learn about support programs available to help stabilize your business."
      />
    </Helmet>
    <Header showLanguageSelect/>
    <main>
      <div className="container">
      {styles.showSidebar ? 
          <div className="row">
            <div className="col-md-8 left">
              <h1 className="title-top">
                {results.find(result => result.id === "page-title").recommendations}
              </h1>
              <p>
                {results.find(result => result.id === "instructions").relationship}
              </p>
              <a name="ppp"></a>
              {filteredNationalPrograms.some(program => program.id === "ppp") && 
                <PPPSection
                  program={filteredNationalPrograms.filter(program => program.id === "ppp")}
                />
              } 
              <a name="eidl"></a>
              {eligibleProgramIds.some(program => program.id === "eidl") && 
                <EIDLProgramSection
                  program={filteredNationalPrograms.filter(program => program.id === "eidl")}
                />
              }
              <StatePrograms
                eligibleStatePrograms={filteredStatePrograms}
              />
            </div>
            <div className="col-md-4">
              <Sidebar
                eligiblePrograms={filteredNationalPrograms.concat(filteredStatePrograms)}
              />
            </div>
          </div>
          :
          <div className="row mobile-container">
            <h1 className="title-top">
              Your Recommendations
            </h1>
            <p>
              If you and your business have an existing relationship with a bank, contact your banker for more information about available relief programs. 
            </p>
            <Tabsbar
              eligiblePrograms={filteredNationalPrograms.concat(filteredStatePrograms)}
            />
            <div data-spy="scroll" data-target="#mobile-tabsbar-container" data-offset="0">
              <a name="ppp"></a>
              {eligibleProgramIds.includes('ppp') && <PPPSection/>} 
              <a name="eidl"></a>
              {eligibleProgramIds.includes('eidl') && <EIDLProgramSection/>}
              <StatePrograms
                eligibleStatePrograms={filteredStatePrograms}
              />
            </div>
          </div>
        }
      </div>
    </main>
    <Footer />
  </div>
  );
};

export default Results;