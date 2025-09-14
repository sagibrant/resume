# 🛠 Product - **UFT** - *2014.7-2025.6*

---

**UFT** (formerly **QTP**) is a flagship commercial test automation platform:

- 🏛️ **Legacy & Evolution:**  
  Launched as *Astra QuickTest* in 1998 by Mercury, the product evolved through the HP/HPE, Micro Focus, and OpenText eras. Today, it exists as the AI-powered UFT One (now called OpenText Functional Testing)—delivering both script-based and AI-driven automation, plus UI testing capabilities.

- 🧩 **Codebase Scale:**
  UFT is built on a robust, large-scale architecture with hundreds of millions of lines of code, spanning C++, C#, JavaScript/TypeScript, and VBScript. It also features deep integrations with Windows APIs and COM-based technologies.

- 🌍 **Enterprise Adoption:**  
  Trusted by over 2,800 enterprises worldwide—with strong adoption among Fortune 500 companies in critical sectors like finance, healthcare, and government.

- 📊 **Market Performance:**  
  Generates approximately $120 million in annual revenue and has roughly 300,000 online users globally.

---

## 💼 Work Experience

| Period               | Company                           | Role                     |
|----------------------|-----------------------------------|--------------------------|
| Jan 2023 – Jun 2025  | OpenText                          | Manager I                |
| Jul 2017 – Jan 2023  | Micro Focus                       | Manager I                |
| Nov 2015 – Jul 2017  | Hewlett Packard Enterprise (HPE)  | Senior Software Engineer |
| Jul 2014 – Nov 2015  | Hewlett Packard (HP)              | Software Engineer        |

---

## 🧠 Summary

I have accumulated approximately 11 years of professional experience with **UFT** (Unified Functional Testing). In the first 5 years, I served as a core developer in the UFT Backend Team. In 2018, I was promoted to UFT Backend Team Manager in recognition of my work developing the UFT parallel execution solution. Later, due to organizational restructuring, I subsequently transitioned to lead a new team primarily responsible for UFT’s Web, Mobile, and AI functionalities.​

### 📦 Core Responsibilities
- UFT Remote Agent (supporting integration with ALM/Application Lifecycle Management)​
- UFT Execution Engine (enabling UFT VBScript execution)​
- UFT HTML Report Logger (facilitating UFT HTML report generation)​
- UFT Mobile Add-in (supporting integration with Mobile Center)​
- UFT Cloud Execution (enabling integration with StormRunner Functional)​
- UFT Web Add-in (supporting automation for IE, Chrome, Edge, Firefox, Safari, and embedded browsers)​
- UFT AI Add-in (supporting integration with codeless AI services)

### 🚀 Key Deliverables by Role​
As a **Core Developer**: Daily responsibilities included implementing user stories, resolving defects, and addressing CPE (Customer Problem Escalation) incidents.​

As a **Team Manager**: Daily responsibilities encompassed collaborating with Product Managers (PMs) and Functional Analysts (FAs) on release planning; defining feature roadmaps with FAs; aligning user story priorities with team members; coordinating defect resolution plans with QA and team members; facilitating daily scrum meetings and monthly one-on-one check-ins; and allocating/adjusting resources based on high-priority CPE incidents and pre-sales POC (Proof of Concept)/demo cases.

### 🌐 Global Cross-Team Collaboration​
- Partnered with the Israel team on StormRunner Functional (SRF) and AI-related projects​
- Collaborated with the Romania team on LeanFT (Lean Functional Testing)/UFTD (UFT Developer) development​
- Worked with the Ukraine team on UFT Frontend optimization​
- Coordinated with the Vietnam team on CPE incident resolution​
- Supported the global pre-sales team on POC (Proof of Concept)/demo cases

### 🧾 Patents
Co-developed 2 patents with colleagues, contributing to UFT’s technical innovation:
- **[Automated Identification of Input Elements in a GUI](https://patents.google.com/patent/US20220107883A1/en)**  
  *Inventors:* Peng-Ji Yin, Cheng Hua, Jie Zhang
- **[Recommending Programmatic Descriptions for Test Objects](https://patents.google.com/patent/US11698851B2/en)**  
  *Inventors:* Peng-Ji Yin, Cheng Hua, Jie Zhang

---

## 🌟 Highlighted Projects


#### 🔹🤖🧠 UFT OCR Improvement – *2024-2025*

- Background     
UFT uses on-prem OCR engines (Abbyy and Tesseract) for text recognition in its AI steps. These engines often misrecognize characters in real customer environments—due to screen size changes, dynamic styles, and varying backgrounds. Most customers lack the ability to retrain the text recognition data themselves.

- Challenge    
Our major customers are large companies with strict privacy policies, so they can’t use cloud-based OCR solutions. We also needed to avoid heavy AI engines, as most QA engineers’ machines have limited performance. The goal was to find an on-prem OCR improvement solution with low resource usage.

- Contribution   
I developed a Hybrid Text Identification solution for OCR recognition on web pages. A similar idea was proposed years ago but rejected due to poor performance (slow processing) and lack of word segmentation. I optimized the algorithm to reduce processing time from ~20 seconds to ~2 seconds. I also added line, word, and character segmentation using browser APIs—making the solution viable.

- Result   
The Hybrid Text Identification solution significantly improved OCR accuracy, achieving up to 100% accuracy on most texts users care about. It made UFT AI steps run more stably and reliably. This hybrid solution was highly recognized and will be widely applied to other add-ins and automation products in our portfolio.


---


#### 🔹☁️🧪 UFT Cloud Browser – *2023-2024*

- Background    
Our Cloud Browser platform, StormRunner Functional (SRF), was shut down due to budget and revenue issues. However, market demand for a cloud-based browser automation solution stayed strong. With tight budgets and limited resources, stakeholders wanted a lightweight alternative that required minimal development work. As the technical lead, I was tasked with designing a new UFT Cloud Browser solution alongside the Digital Lab team.

- Challenge    
The old SRF solution was over-designed and costly. We needed a quick, simple solution that reused existing infrastructure to cut costs.

- Contribution   
I worked with the Digital Lab team to architect a lean Cloud Browser solution. We reused Digital Lab’s existing Auto Scaling design to host Cloud Browser environments. I rewrote the communication layer to use WebSocket-based messaging instead of Window Message-based messaging. We also added new automation libraries to simulate mouse and keyboard actions during replay.

- Result    
We launched the new UFT Cloud Browser solution in just 4 months with a hybrid team of 4 developers. It’s robust, scalable, and easy to extend to support other technologies in the future. This project highlighted our team’s strong ability to act quickly and think creatively.


---


#### 🔹🧩🧪 UFT MV3 Extension Migration – *2022–2023*

- Background    
UFT uses browser extensions as browser agents for automation testing. As Chromium deprecates Manifest V2 (MV2), we had to migrate the existing browser extension to Manifest V3 (MV3) to keep UFT compatible with Chrome and Edge long-term.

- Challenge   
Key differences between MV2 and MV3 blocked the migration:
    - MV3 extensions use service workers for background tasks (instead of persistent pages), which idle after 5 minutes—disrupting continuous automation.
    - MV3 enforces stricter Content Security Policy (CSP), which blocks external script execution critical to UFT’s workflow.
    - Deprecated APIs like webRequest and webRequestBlocking—used for header modification logic—no longer work in MV3.

- Contribution   
I redesigned the extension’s communication logic and added reconnection mechanisms to adapt to MV3’s service worker idle behavior. To bypass CSP restrictions, I integrated the Chrome DevTools Protocol (CDP). I also added a Force-Install option for users, letting them turn on the webRequest and webRequestBlocking APIs in enterprise mode.

- Result   
The MV3 extension migration was completed successfully. This work protected UFT’s web automation capabilities from Chromium’s ecosystem changes, ensuring long-term compatibility with modern browsers.


---


#### 🔹🧩⚡ UFT Web Fast Run Mode – *2020–2021*

- Background    
Many UFT users are migrating their web testing scripts from IE to modern browsers like Chrome, Edge, and Firefox. After migration, they noticed significant performance drops. One critical issue reported by customers: test steps using Virtual Relation Identification (VRI) slowed from 3 seconds to over 3 minutes—badly disrupting their daily automation workflows.

- Challenge    
The UFT Web Add-in is one of UFT’s oldest and most complex components, with ~400,000 lines of code. It was originally designed and optimized for IE (including legacy code for IE 5). Since over 90% of UFT users rely on the Web Add-in for web testing, we couldn’t risk any functional regressions while improving performance.

- Contribution   
First, we researched and identified the root cause: excessive redundant communication between UFT and browser agents for each test step. To fix this, I designed a new UFT Web automation protocol that ensures one message per step. I also added a new layout to capture and redirect function calls from testing scripts—letting us rewrite web methods one by one without causing unexpected regressions.

- Result    
The new UFT Web Fast Run mode improved performance by about 3x compared to the old solution. For VRI-heavy scenarios, execution time dropped from 3 minutes to just 5 seconds. This deep refactor not only boosted performance but also helped the entire team better understand the UFT Web codebase—enabling more confident modernization in future updates.


---


#### 🔹🧠🔤 UFT TextObject – *2019*  

- Background    
Traditional UFT TestObject is tightly coupled with specific automation technologies like Web, UI Automation, Java, .NET, and WPF. However, many large, security-focused organizations block these traditional hook/injection solutions—making UFT unusable in their environments.

- Challenge    
We needed a reliable fallback solution for when injection/hook methods are prohibited in a customer’s environment.

- Contribution   
I proposed and designed a new type of TestObject: TextObject. It uses UFT’s OCR engine to recognize text, locate positions, and execute automation actions.

- Result   
This innovation let large companies continue functional testing and automation without violating their infrastructure policies—filling a critical gap in UFT’s automation capabilities.


---


#### 🔹🧪⚙️ UFT Parallel Execution – *2018*

- Background  
Historically, UFT (Unified Functional Testing) didn’t support parallel test execution. This was a big bottleneck for customers trying to speed up their automation pipelines. It became critical when pre-sales teams reported losing deals to competitors—who could run 10+ mobile tests in parallel on a single laptop. 

- Challenge 
UFT’s core is built on 4 million lines of legacy code. It relied heavily on singleton COM objects and was designed under the assumption of one instance per user session. Many modules weren’t built to handle concurrent execution or isolate instances from each other. 

- Contribution  
I focused first on UFT Mobile Parallel Execution. I removed unnecessary dependencies in UFT Mobile testing and refactored the required legacy components to support parallel runs. Then, I developed key components:
    - UFT ParallelRunner to manage parallel executions
    - qtdrv to host each test instance
    - UFT Parallel Report to show summarized results of parallel runs

- Result  
I delivered the UFT Mobile Parallel Execution solution, which was highly praised by senior managers. The PM team reprioritized the roadmap to expand this capability—first to UFT Web, then to UFT Java. For this high-impact work, I was promoted to **Manager I**.


---


#### 🔹☁️🧱 UFT Cloud Execution on SRF - *2016-2017*

- Background  
StormRunner Functional (SRF) is a cloud-based solution for running functional tests on web and mobile apps. It provides a virtual environment with multiple browsers, operating systems, and mobile devices—letting teams test across different setups without managing their own infrastructure. My role was to design and build the UFT Cloud Execution solution for SRF.

- Challenge   
UFT could only run tests on Windows environments. Using AWS EC2 machines to host UFT test runs was too expensive. Also, SRF was fully deployed on AWS using Kubernetes and only supported Linux containers—making UFT integration tricky.

- Contribution  
I researched Windows container technology and got UFT to run in Windows containers, then published the UFT Windows Docker image. I built the UFT Engine, Executor, and Agent modules using TypeScript (following SRF’s architecture) to create and manage UFT test runs inside the container instances on AWS EC2. I also traveled to Yehud to work with the DevOps team, helping register the UFT execution service with SRF. This made UFT Cloud Execution available on SRF.

- Result   
UFT Cloud Execution launched successfully on SRF. Additionally, publishing the UFT Windows Docker image on Docker Hub brought in an unexpected $2–3 million in annual revenue.


---


#### 🔹📱🔗 HP/HPE Mobile Center Integration - *2016*

- Background  
HP/HPE Mobile Center (MC) is a mobile testing platform that lets QA teams run tests on real iOS, Android, and Windows devices. My role was to maintain the UFT–MC integration, develop new features, and support customers.

- Challenge   
This was an ongoing integration task for me from 2016 to 2025. The main challenge was keeping up with continuous development while better meeting diverse customer requirements.

- Contribution  
I worked on hundreds of user stories, defects, and use cases. Key contributions include:
    - Cross Browser Testing: Enabled pure UFT Web scripts to run on mobile browsers.
    - Code Refactoring: Redesigned Record and Run settings from MFC to WPF; refactored the communication module to stabilize connections.
    - Parallel Execution: Built UFT Mobile Parallel Execution functionality.
    - Cloud Browser: Expanded capabilities from mobile testing to include desktop browser testing (extending from Mobile Center to Digital Lab).

- Result   
UFT Mobile testing became increasingly stable over time and grew to be a preferred choice among our customers.


---


#### 🔹📄🧾 UFT HTML Report Logger - *2015*

- Background  
Before, UFT used the UFT Run Result Viewer (RRV)—a legacy WinForms app—to show test run results. RRV had two big issues: it worked slowly with large numbers of test steps, and sharing results was hard (people needed UFT installed to view them). But QA managers and stakeholders often needed to access results without the full environment setup. To fix this, the FA (Functional Architecture) and PM (Product Manager) plan to develop a new HTML Report. The goal was to make it lightweight, easy to share, and viewable in any browser as a single self-contained .html file.

- Challenge   
The old UFT RRV could easily use all existing modules (.dll files) to extract binary test result data and show it on the UI. But the new HTML Report couldn’t use these modules. To give the HTML Report the same features as RRV, we had to re-design the data structure and convert the collected test data into this new structure.

- Contribution  
First, I designed a new data structure that could be converted into JSON format. Then, I built the HTML Report Logger: it listens to events from the UFT ExecutionEngine, collects all necessary test result information, and writes this data into a structured JSON file.

- Result   
The new HTML Report was widely accepted by users. Also, through this project, I deepened my understanding of the UFT ExecutionEngine and became a key backend expert in the team.


---


#### 🔹🖥️🔌UFT Remote Agent - *2014*

- Background  
The UFT Remote Agent is a DCOM component that lets users run tests remotely from ALM/QC (formerly Quality Center). It was an old component—hard to maintain, with frequent bugs reported by customers and little modularity. The Software Architect decided to refactor it using C#, and I led this refactoring work.

- Challenge  
The original UFT Remote Agent was built in C++ years ago. Over time, it became a single "monolithic" class with more than 9,000 lines of code—hard to read and understand. The new version had to use C#. If we just copied the old design, performance would drop, but we needed the same (or better) performance. Redesigning it while keeping/improving performance was very challenging.

- Contribution  
I analyzed the original codebase deeply and worked closely with the ALM team to fully understand how UFT and ALM connect. Based on this, I redesigned the class structure—splitting responsibilities to match UFT’s functional areas. I also rebuilt the Remote Agent’s UI with WPF, making it more modern and easier to maintain. For about a month, I used Visual Studio Profiler to optimize performance. One key improvement: I loaded the UFT AOM Agent as an assembly to cut down on cross-process communication overhead.

- Result   
The new UFT Remote Agent performed as well as the old version. It had a cleaner UI and was much easier to maintain. For this work, I got my first **Team Star** award.

---
