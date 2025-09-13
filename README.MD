# 🧾 Résumé – Jie Zhang

---

## 📌 Personal Information

- **Name:** Jie Zhang  
- **Gender:** Male  
- **Date of Birth:** October 1988  
- **Place of Birth:** Shanghai, China  
- **Email:** [sagibrant@163.com](mailto:sagibrant@163.com)  
- **Phone:** +86 136 1167 2073  
- **LinkedIn:** [linkedin.com/in/sagi-zhang-2845451b](https://www.linkedin.com/in/sagi-zhang-2845451b/)

---

## 🎓 Education

| Period               | Institution                  | Degree & Major                              |
|----------------------|-------------------------------|----------------------------------------------|
| Sep 2011 – Jun 2014  | East China Normal University  | M.Sc. in Computer Software and Theory        |
| Sep 2007 – Jun 2011  | East China Normal University  | B.Sc. in Software Engineering                |

---

## 💼 Work Experience

| Period               | Company                           | Role                     |
|----------------------|-----------------------------------|--------------------------|
| Jan 2023 – Jun 2025  | OpenText                          | Manager I                |
| Jul 2017 – Jan 2023  | Micro Focus                       | Manager I                |
| Nov 2015 – Jul 2017  | Hewlett Packard Enterprise (HPE)  | Senior Software Engineer |
| Jul 2014 – Nov 2015  | Hewlett Packard (HP)              | Software Engineer        |

---

## 🚀 Short Summary
11-year Core R&D Engineer & 7-year Agile Team Lead for enterprise software UFT/QTP, responsible for maintaining and developing UFT Web/Mobile/AI add-ins. Earned rapid 5-level promotion in 5 years at HP/HPE. Proficient in C++, C#, JS/TS; experienced in cloud migration projects with Docker, Kubernetes, AWS; skilled in Windows application and WebExtension development. Drove automation innovation (2 patents) and excelled in global cross-team collaboration.

## 📦 Professional Summary
I joined HP in 2014, serving as a core R&D engineer for UFT/QTP, a flagship enterprise-level automated testing software. I went through multiple organizational restructurings and cross-border mergers and acquisitions (HP → HPE → Micro Focus → OpenText), yet remained focused on the product and technology, developing a deep understanding of software automation (specifically GUI Testing & RPA). Recognized for outstanding performance, I was promoted 5 levels over 5 years at HP/HPE, rapidly advancing from Entry level to M1 Manager.

1. 11 years of experience in large-scale enterprise software development.     
Proficient in C++, C#, and JavaScript/TypeScript; experienced in cloud migration projects using Docker, Kubernetes, and AWS; skilled in Windows application and WebExtension development.

2. 7 years of R&D team management expertise.     
I led the UFT Web team in developing UFT Web/Mobile/AI add-ins and served approximately 300,000 active enterprise QA engineers. During my tenure, the product’s average annual revenue was around $70–100 million.

3. Proven global collaboration experience.     
I successfully participated in multiple cross-regional joint development tasks and have worked with teams across the US, Israel, Vietnam, Ukraine, Romania, India, Japan, and Singapore.

4. Strong focus on innovation.    
I adopt a flexible approach to problem-solving and am a co-inventor of two patents:
- "Automated Identification of Input Elements in a GUI" (Peng-Ji Yin, Cheng Hua, Jie Zhang).
- "Recommending Programmatic Descriptions for Test Objects" (Peng-Ji Yin, Cheng Hua, Jie Zhang).

---

## 🧠 Technical Expertise

- **Languages:** C++, C#, JavaScript/TypeScript
- **Technologies:** Windows App, Browser Extensions, Web Automation, etc
- **Management Skills:** Six Thinking Caps, SLII Leadership, HBDI, etc

---

## 🌟 Recent Highlights

- 🧠**Hybrid OCR Solution:**  
  Engineered a hybrid text-recognition system that drastically improved local OCR accuracy for AI automation.

- 🖱**Coordinate Transformation Algorithm:**  
  Built a cross-scale algorithm to map screen coordinates to viewport coordinates—solving persistent UI inspection offset issues.

---

## 🧾 Patents

- **[Automated Identification of Input Elements in a GUI](https://patents.google.com/patent/US20220107883A1/en)**  
  *Inventors:* Peng-Ji Yin, Cheng Hua, Jie Zhang

- **[Recommending Programmatic Descriptions for Test Objects](https://patents.google.com/patent/US11698851B2/en)**  
  *Inventors:* Peng-Ji Yin, Cheng Hua, Jie Zhang

---

## 🛠 Projects

- **2025 - UFT OCR Improvement**   
Legacy engines (ABBYY, Tesseract) underperformed on-premises, while cloud OCR faced privacy/infrastructure barriers. Initial Hybrid Text Identification PoC failed (20s/scan, no segmentation). I optimized the algorithm (20s→2s), added word segmentation, getting my PoC selected. The solution fused OCR with DOM text extraction, overcoming complex styles/nested iframes. Achieved 100% accuracy on web text, boosting automation reliability in secure/offline environments.

- **2023,2024 - UFT Cloud Browser**. 
Post-StormRunner Functional (SRF) sunset, demand for cloud-based browser automation remained high—yet budget/resource constraints required a lightweight solution. As Technical Lead, I architected a lean build with the Digital Lab team: leveraged existing infrastructure/UFT extensions, redesigned communication via WebSocket (replacing complex legacy pipelines), reimplemented features using browser APIs (cutting Windows-native dependencies), and led agile co-development (weekly syncs, daily code reviews).  
Launched a fully functional UFT Cloud Browser in 4 months with just 4 developers—dramatically outperforming SRF’s 3-year, ~30-engineer effort—proving agility, architectural foresight, and delivery under pressure.

- **2022 - UFT Web Agent MV3 Migration**  
Led the architectural restructuring and MV3 version upgrade of the UFT Web Agent. Reconstructed the Web Extension compilation logic using Gulp, resolving core technical bottlenecks such as cross-domain frame communication and Content Security Policy (CSP). Innovatively designed an event simulation solution based on Chrome DevTools Protocol (CDP) and MAIN WORLD, addressing numerous common user issues. This reduced customer support tickets by 33%, significantly enhancing product stability and user experience.  

- **2020 - UFT Web Fast Mode**  
Led the team in end-to-end restructuring of the UFT Web Add-in. Leveraging the execution characteristics of UFT test steps, the design merged multiple UFT Web Requests into a single UFT AutomationStep, drastically reducing I/O interaction frequency. Technically, non-intrusive modifications to the original code were implemented via a custom IDispatch invoke function, ultimately achieving a 300% improvement in execution performance.  

- **2019 - UFT TextObject**  
Introduced the TextObject module based on an OCR engine, breaking through the limitations of traditional control recognition. This enabled UFT to directly process text content from any desktop application via image text recognition technology, expanding the boundaries of automated testing scenarios and improving UFT’s compatibility with unsupported controls and interfaces.  

- **2018 - UFT Parallel Execution**  
Developed UFT’s parallel execution functionality. By delving into over 4 million lines of UFT core code, implementing module function abstraction, code decoupling, and restructuring, I solved the parallel execution challenge that had plagued the product for nearly 20 years. This enhanced customers’ execution efficiency in automated testing environments, helped the sales team secure more orders, and led to my promotion to Technical Manager of the UFT Backend Team.  

- **2017 - Storm Runner Functional (SRF)**  
Spearheaded the implementation of UFT’s cloud migration solution. Based on AWS EC2 Auto Scaling and Windows Container technologies, I used TypeScript to develop the UFT Agent and UFT Executor, packaged them into Docker images, and collaborated with the DevOps team to deploy them on a Kubernetes (k8s) cluster. This enabled full cloud-based execution of UFT test scripts, laying the foundation for UFT’s cloud-native testing capabilities.  

- **2016 - HP/HPE Mobile Center/Digital Lab**  
Led the deep integration of UFT with HP/HPE Mobile Center (MC). Used C# to implement the RESTful API interaction layer with MC, restructured the UFT Record and Run Settings interface (previously built with MFC) using WPF, and adopted the CefSharp component to display real-time VNC screens of mobile devices—completing comprehensive cross-terminal testing support.  

- **2015 - UFT HTML Report**  
Designed and developed a native HTML-based test reporting system. Used C++ to send logEvent signals at the UFT Engine layer, and developed a logger component in C# to receive these signals—handling test step data collection, screenshot compression, and report read/write operations asynchronously. The final output was a single .html format report file.  

- **2014 - UFT Remote Agent**  
Refactored the original C++ based UFT Remote Agent (a DCOM component for external products to invoke UFT test script execution) using C#. Implemented dependency inversion via ServiceRegistry and Assembly.Load to decouple the previously tightly coupled design. After performance optimization with VS Performance Profiler, the C# version achieved performance parity with the original C++ version.

- **2013 - Burundi Population Census System**
Contributed as an independent developer to the design and deployment of a national data collection system, supporting Burundi's presidential campaign. Helped improve system architecture and deployment strategy for field use.

- **2011 -Troll – Groundwater Monitoring**
Joined the team as an independent contributor. Developed a long-term environmental data monitoring solution featuring robust 3G data transmission. The system operated reliably with minimal maintenance for over 4 years.

- **2010 Botion Restaurant System**
Joined a startup (xpfood.com) and led the end-to-end development of a CRM and POS system, including invoicing and card-based customer features. Delivered a complete, production-ready solution for restaurant management.

---

##  🧩 Additional Information

### 📦 Unified Functional Testing (UFT/QTP) - *2014.7-2025.6*

I joined the UFT/QTP Shanghai team in 2014, advancing to Manager in 2018. Initially led the UFT Backend team, then transitioned to lead the UFT Web team—responsible for developing and maintaining UFT Web/Mobile/AI add-ins.

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