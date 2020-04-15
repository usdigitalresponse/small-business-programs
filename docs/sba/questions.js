var language_defaults = {
  en: {
    yes_text: "Yes",
    no_text: "No",
    skip: "Skip",
    not_sure: "Not Sure",
    examples: "Examples",
    enter: "Enter"
  },
  es: {
    yes_text: "Sí",
    no_text: "No",
    skip: "Omitir",
    not_sure: "No estoy seguro",
    examples: "Ejemplos",
    enter: "Ingresar"
  }
};

var questions = {
  "disclaimer": {
    html: "<strong>Disclaimer for Business Support Eligibility Wizard</strong> \
    <p> \
      US Digital Response is offering this screening tool \
      that lists emergency assistance programs that you may decide to consider based \
      upon information you provide about your organization. \
    </p> \
    <p> \
      The Eligibility Wizard will provide suggestions on how to apply for \
      benefits, but cannot guarantee eligibility and does not reserve any funding \
      or a place in any application queue. The administering agency \
      will determine all eligibility requirements upon your submission of an \
      application. \
    </p>",
    hard_pass: false, // if saying no to agreement
    yes_text: "Agree",
    no_text: "Cancel"
  },

  "Basic Information": {
    header: true,
    es: "Información básica"
  },

  "since_february": {
    html: "<p> \
      Did your organization start operating before <strong>February 15</strong>, 2020? \
    </p>",
    // hard_pass: false // if the business is too recent or inactive
  },

  "business_type": {
    html: "<p>Which phrase best describes your business?</p>",
    select: {
      options: ["Independent Contractor", "Self Employed", "Non-Profit - 501(c)(3)",
      "For-Profit Small Business", "Veterans Organization - 501(c)(19)",
      "Tribal"]
    }
  },

  "Physical Location": {
    header: true,
    es: "Ubicación fisica"
  },
  "in_usa": {
    hard_pass: false, // if saying not in USA
    html: "<p> \
      Is your organization registered to do business in the United States or its territories? \
    </p>"
  },

  "Business Size": {
    header: true,
    es: "Tamaño del negocio"
  },

  "existing_sba": {
    html: "<p>Does your organization have any non-disaster SBA loans, like 7(a), 504, or microloans?</p>"
  },

  "Revenue": {
    header: true,
    es: "Ingresos"
  },
  "revenue_2019": {
    html: "<p> \
      Estimate your organization's annual revenue in 2019. \
    </p>",
    input: {
      name: "2019_revenue",
      examples: "$50000; 3,000,000"
    },
    skippable: true
  },

  "Loans and Guarantees": {
    header: true,
    es: "Préstamos y garantías"
  },

  "fico": {
    html: "<p> \
      Does your organization or one of its owners have a FICO score of at least 600? \
    </p>",
    skippable: "Not Sure",
    es: {
      skippable: "Omitir"
    }
  },

  "Other": {
    header: true,
    es: "Otras"
  },

  "current_economy": {
    html: "<p>Does current economic uncertainty make the loan necessary to support your ongoing operations?</p>",
  },

  "for_workers": {
    html: "<p>Will the funds be used for any of the following?</p> \
      <ul> \
        <li>Retaining workers and maintaining payroll.</li> \
        <li>Making mortgage, lease, and utility payments.</li> \
      </ul>"
  },

  "paperwork": {
    html: "<p>Do you have documentation for all the information below?</p> \
      <ul> \
       <li>The number of full-time equivalent employees on your payroll.</li> \
       <li>The dollar amounts of payroll costs.</li> \
       <li>Covered mortgage interest payments.</li> \
       <li>Covered rent payments.</li> \
       <li>Covered utilities.</li> \
      </ul>"
  },

  "no_other_lenders": {
    html: "<p>Have the owners tried and failed to get funds from other financial lenders?</p>",
    helptext: "Other lenders might include banks and credit unions, short term business loans, or personal loans."
  },

  "Business Types": {
    header: true
  },

  "illegal_business_SBA": {
    // hard_pass: true, // if saying yes to illegal business
    html: "<p> \
      Please confirm your organization is not: \
      <span class=\"badge badge-success\">Federal SBA Programs</span> \
    </p> \
    <ul> \
      <li>Related to gambling or gaming activities.</li> \
      <li>Involved in any farming or agricultural industry. (This includes producing food and fiber, or ranching and raising livestock or fish.)</li> \
      <li>A religious organization.</li> \
      <li>A charitable organization.</li> \
      <li>A hobby.</li> \
      <li>A government-owned concern.</li> \
      <li>A real estate developer.</li> \
    </ul>",
    confirm_only: true,
    yes_text: "Confirm"
  },
  "illegal_business_eidl": {
    html: "<p>Please confirm your organization:</p>\
    <ul> \
    <li>Is not engaging in illegal activity under Federal law.</li> \
    <li>Has no principals who own at least 50% of the company that are over 60 days delinquent on child support obligations.</li> \
    <li>Does not present live performances of a prurient sexual nature.</li> \
    <li>Does not make money from selling products, services, or presentations of a prurient sexual nature.</li>\
    <li>Is not in the lobbying business.</li> \
    <li>Is not a member of Congress or a state, local, or municipal government entity.</li> \
    </ul>",
    confirm_only: true,
    yes_text: "Confirm"
  }
};




if (typeof module !== "undefined") {
  module.exports = {
    language_defaults: language_defaults,
    questions: questions
  };
}
