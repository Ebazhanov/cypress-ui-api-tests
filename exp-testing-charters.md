# Exploratory Testing – GoodBudget Web App
## ✅ Testing Charters
- [High] Sign-up and onboarding flow
- [High] Envelopes - Adding/Editing/Deleting
- [High] Transactions - Adding/Editing/Deleting
- [Medium] Responsiveness across screen sizes - mobile, tablet, desktop
- [Medium] Accessibility (aXe, Lighthouse)
- [Medium] REST API monitoring (using DevTools → Network tab)
- [Low] Cookie/localStorage handling and privacy check
- [Low] Keyboard navigation and screen reader usability

## 🐞Findings per Charter
* No error message during signup without selecting captcha – High
* Creating envelope by API possible with the same name – Medium
* No warning message displayed when deleting envelopes – Medium
* No confirmation dialog for deleting a transaction – Medium
* Session expires without warning — risk of data loss – High
* No error shown for empty fields in transaction form – Medium
* Low contrast on some buttons (Lighthouse score 76) – Medium
* Elements overlap on iPhone SE viewport in DevTools – Medium
* Sensitive data sent over HTTP (not HTTPS) during testing – High

## 📝Report
The GoodBudget web app is generally functional, especially in key flows. However,
several High and Medium risk issues were identified that should be addressed
with priority — particularly around security, validation, and user experience.