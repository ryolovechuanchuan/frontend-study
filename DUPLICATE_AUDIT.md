# D45–D180 課表重複檢查報告

本版本已實際解壓並檢查使用者提供的 `每日學習計畫.7z`。

## 已明確修正的重複或過度相似主題

- **Day45** `Day45_Function_and_Scope` → `Day45_Function_Patterns_and_Scope_Practice`
  - Day21 已學過函式基礎，因此改為函式模式、作用域實戰與 closure 入門。
- **Day46** `Day46_ES_Modules` → `Day46_ES_Modules_Project_Structure`
  - Day34 已學過 modules，因此改為多檔案專案結構、匯入匯出策略與模組邊界。
- **Day47** `Day47_Promise_Basics` → `Day47_Promise_Chaining_and_Error_Flow`
  - Day29 已學過 Promise 基礎，因此改為 chaining、錯誤傳遞與 Promise 組合。
- **Day48** `Day48_Async_Await` → `Day48_Async_Await_Concurrency`
  - Day30 已學過 async/await，因此改為並行、序列與 Promise.all。
- **Day49** `Day49_Fetch_API` → `Day49_Fetch_API_Robust_Client`
  - Day30 已使用 Fetch，因此改為可重用 API client、狀態碼與取消請求。
- **Day51** `Day51_Flexbox_Layout_Practice` → `Day51_Flexbox_Dashboard_Layout`
  - Day12–13 已學 Flexbox，因此改為複雜 Dashboard 版型實戰。
- **Day53** `Day53_Responsive_Design` → `Day53_Responsive_Design_Patterns`
  - 前期已接觸 RWD，因此改為斷點策略、圖片、字體與元件級響應式。
- **Day54** `Day54_Form_Validation` → `Day54_Form_Validation_Advanced`
  - Day23 已學表單驗證，因此改為即時驗證、錯誤 UX 與可存取性。
- **Day56** `Day56_Date_Time` → `Day56_Date_Time_Utilities`
  - Day31 已學 Date，因此改為日期工具函式、時區與格式化。
- **Day57** `Day57_Error_Handling` → `Day57_Error_Handling_Strategy`
  - Day33 已學錯誤處理，因此改為錯誤分類、集中處理與使用者訊息。
- **Day104** `Day104_LocalStorage` → `Day104_React_LocalStorage_Custom_Hook`
  - Day26 已學 localStorage，因此改為 React custom hook 與同步策略。
- **Day105** `Day105_Fetch_API_React` → `Day105_React_Fetch_Loading_Error_States`
  - Day30 已學 Fetch，因此改為 React loading/error/abort 狀態管理。
- **Day145** `Day145_API_Playground_Dog_API` → `Day145_React_API_Playground_Multi_API`
  - Day38 已做 API Playground，因此改為 React 多 API 架構版本。
- **Day146** `Day146_API_Playground_Movie_API` → `Day146_React_Movie_Search_Pagination`
  - 原本 Movie API 已可能做過，因此改為 React 搜尋、分頁與快取。
- **Day147** `Day147_API_Playground_GitHub_API` → `Day147_React_GitHub_Profile_Dashboard`
  - 改為 React Dashboard，避免重複基礎 API 練習。
- **Day148** `Day148_Calculator_Basic` → `Day148_React_TypeScript_Calculator`
  - 先前已有計算機練習，因此改為 React + TypeScript 重構。
- **Day149** `Day149_Calculator_Advanced` → `Day149_Calculator_State_Machine_and_Tests`
  - 改為狀態機、邊界條件與測試，不重教基本運算。
- **Day150** `Day150_Calculator_Deploy` → `Day150_Calculator_Accessibility_and_Deploy`
  - 改為可存取性、鍵盤操作與部署，不重做基礎功能。

## 原則
- 不重教 Day1–Day44 已完成的基礎內容。
- 相同技術再次出現時，必須是進階、框架化、重構、測試、可存取性或部署情境。
- 保留原本的 TypeScript、React、作品集與日本求職主線。