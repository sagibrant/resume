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

## 🚀 Professional Summary

- 🧹⚙️ **11 Years of Large-Scale Enterprise Software R&D Experience​**  
  Served as a core R&D engineer for UFT/QTP, a renowned enterprise-level test automation software. Recognized for delivering scalable, complex solutions, resolving critical CPE incidents, spearheading the development of core features, driving innovation in automation tooling, and fostering collaboration across globally distributed teams. Proficient in C++, C#, and JavaScript/Typescript; experienced in using Docker, Kubernetes (k8s), AWS, and professionaly in developing Windows application and WebExtension. Due to outstanding performance, was promoted 5 levels in 5 years, rapidly advancing from an Entry-level role to M1 Manager. Addressed hundreds of real-world test development challenges for customers.​

- 📐🔍 **7 Years of R&D Team Management Experience​**  
  Managed two core UFT R&D teams (5–7 members each), supporting approximately 300,000 active online test engineers from large enterprises. Proficient in Agile methodology: organized daily Scrum meetings, strictly oversaw Code Reviews, and ensured all R&D tasks were delivered on schedule and with high quality.​

- 🌐⚡ **Global Cross-Team Collaboration**  
  Participated in multiple cross-border/cross-regional joint development projects. Maintained efficient communication with teams in the US, Israel, Vietnam, Ukraine, Romania, India, Japan, and Singapore. Possess strong cross-cultural communication skills and proven experience in remote team collaboration.​

- 🤖🧠 **Innovation Capabilities​**   
  Prioritize innovation and knowledge sharing, solving problems flexibly without rigid constraints. Co-authored the following patents:​
- **[Automated Identification of Input Elements in a GUI](https://patents.google.com/patent/US20220107883A1/en)**  
  *Inventors:* Peng-Ji Yin, Cheng Hua, Jie Zhang
- **[Recommending Programmatic Descriptions for Test Objects](https://patents.google.com/patent/US11698851B2/en)**  
  *Inventors:* Peng-Ji Yin, Cheng Hua, Jie Zhang

---

## 🛠 Recent Projects

### 🧠📦 Unified Functional Testing (UFT/QTP) - *2014.7-2025.6*

As a **Core Developer** and **Team Manager** for **Unified Functional Testing (UFT/QTP)**, I lead the team in delivering new features, handling customer issues (CPE incidents), and driving architectural modernization and innovation.

**UFT** (formerly **QTP**) is a flagship commercial test automation platform:

- 🏛️ **Legacy & Evolution:**  
  Launched as *Astra QuickTest* in 1998 by Mercury, the product evolved through the HP/HPE, Micro Focus, and OpenText eras. Today, it exists as the AI-powered UFT One (now called OpenText Functional Testing)—delivering both script-based and AI-driven automation, plus UI testing capabilities.

- 🧩 **Codebase Scale:**  
  UFT is built on a robust, large-scale architecture with hundreds of millions of lines of code, spanning C++, C#, JavaScript/TypeScript, and VBScript. It also features deep integrations with Windows APIs and COM-based technologies.

- 🌍 **Enterprise Adoption:**  
  Trusted by over 2,800 enterprises worldwide—with strong adoption among Fortune 500 companies in critical sectors like finance, healthcare, and government.

- 📊 **Market Performance:**  
  Generates approximately $120 million in annual revenue and has roughly 300,000 online users globally.

#### 🔹🤖🧠 UFT OCR Improvement – *2024-2025*

Legacy OCR engines such as `ABBYY` and `Tesseract` frequently underperformed in on-premises environments, falling short of the accuracy needed for reliable AI automation. Additionally, many customers were unable to use cloud-based OCR services due to privacy constraints or infrastructure limitations.

To address these challenges, our team evaluated five potential solutions—including EasyOCR and enhanced Tesseract variants. Among them, the initial proof of concept (PoC) for a `Hybrid Text Identification` approach was initially rejected due to slow performance (~20 seconds per scan) and lack of word segmentation.

After I joined the initiative, I optimized the algorithm to reduce the processing time from **~20s** to **~2s**, while also enhancing the extraction logic to include word boundary segmentation. As a result, my PoC was selected and successfully implemented.

The `Hybrid Text Identification solution` intelligently fuses OCR results with DOM-based web text extraction. Key challenges included handling complex styles, nested `iframe` structures, and ensuring minimal performance impact during test execution. This hybrid method significantly outperformed traditional engines, achieving up to **100%** accuracy on web-rendered text—substantially improving automation reliability in secure, offline environments.

#### 🔹☁️🧪 UFT Cloud Browser – *2023-2024*

Following the sunset of the `StormRunner Functional (SRF)` platform, market demand for a cloud-based browser automation solution remained strong. However, due to tight budget and resource constraints, stakeholders sought a lightweight alternative with minimal development overhead.

As the technical lead, I architected a lean Cloud Browser solution in collaboration with the Digital Lab team, achieving rapid delivery with strategic reuse and design simplification:

- **Leveraged** existing Digital Lab infrastructure and UFT browser extensions to minimize new implementation overhead.
- **Redesigned** the communication layer using WebSocket-based messaging, replacing complex legacy pipelines with a streamlined, maintainable protocol.
- **Reimplemented** key automation features using browser extension APIs, eliminating dependencies on Windows-native APIs for improved cross-environment support.
- **Established agile co-development practices**, including weekly syncs and daily hands-on code reviews with the partner team.

This effort resulted in a fully functional UFT Cloud Browser released in just **4** months with only **4** developers, dramatically outperforming the prior SRF initiative that required **3** years and **~30** engineers—demonstrating our engineering agility, architectural foresight, and ability to deliver high-value solutions under tight constraints.

---

### 🔹🧩🧪 Other projects – *2014–2023*

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
