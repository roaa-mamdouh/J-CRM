if(!self.define){let s,e={};const l=(l,n)=>(l=new URL(l+".js",n).href,e[l]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=l,s.onload=e,document.head.appendChild(s)}else s=l,importScripts(l),e()})).then((()=>{let s=e[l];if(!s)throw new Error(`Module ${l} didn’t register its module`);return s})));self.define=(n,i)=>{const r=s||("document"in self?document.currentScript.src:"")||location.href;if(e[r])return;let a={};const u=s=>l(s,r),o={module:{uri:r},exports:a,require:u};e[r]=Promise.all(n.map((s=>o[s]||u(s)))).then((s=>(i(...s),a)))}}define(["./workbox-78e2cf90"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/AddressModal-c9e0b8b2.js",revision:null},{url:"assets/ArrowUpRightIcon-1f7d0656.js",revision:null},{url:"assets/AssignmentModal-b1255d73.js",revision:null},{url:"assets/Breadcrumbs.vue_vue_type_script_setup_true_lang-ac4cff83.js",revision:null},{url:"assets/CalendarIcon-64a87471.js",revision:null},{url:"assets/callLog-4af9dda9.js",revision:null},{url:"assets/CallLogs-452f60e3.css",revision:null},{url:"assets/CallLogs-849a093b.js",revision:null},{url:"assets/CallUI-9e306b4a.css",revision:null},{url:"assets/CallUI-c326d6c8.js",revision:null},{url:"assets/CameraIcon-002a69e5.js",revision:null},{url:"assets/CommentIcon-552fbe88.js",revision:null},{url:"assets/Contact-20de75fb.js",revision:null},{url:"assets/ContactModal-4e6a6471.js",revision:null},{url:"assets/ContactModal-eca9ff9c.css",revision:null},{url:"assets/Contacts-53852ca8.js",revision:null},{url:"assets/contacts-945ac9fb.js",revision:null},{url:"assets/ContactsIcon-3965efd8.js",revision:null},{url:"assets/ContactsListView-94b18f2c.js",revision:null},{url:"assets/CustomActions-4aa71942.js",revision:null},{url:"assets/Dashboard-691de622.js",revision:null},{url:"assets/DatePicker.vue_vue_type_script_setup_true_lang-3cf9a372.js",revision:null},{url:"assets/Deal-5ea390dd.js",revision:null},{url:"assets/Deal-e696fd7f.css",revision:null},{url:"assets/Deals-8c9c0e38.js",revision:null},{url:"assets/DealsIcon-c75ef9a8.js",revision:null},{url:"assets/DealsListView-a9ac245f.js",revision:null},{url:"assets/DesktopLayout-f02c5506.js",revision:null},{url:"assets/DetailsIcon-24bf3ae4.js",revision:null},{url:"assets/DragVerticalIcon-2b8c1048.js",revision:null},{url:"assets/Dropdown.vue_vue_type_script_setup_true_lang-f30ca23a.js",revision:null},{url:"assets/Email2Icon-114a3543.js",revision:null},{url:"assets/EmailAtIcon-3871ac2e.js",revision:null},{url:"assets/EmailTemplate-6c823550.js",revision:null},{url:"assets/EmailTemplateModal-8c6fb82c.js",revision:null},{url:"assets/EmailTemplates-91b14fb7.js",revision:null},{url:"assets/FadedScrollableDiv-9739b5b1.js",revision:null},{url:"assets/Fields-0a7d93b5.js",revision:null},{url:"assets/Fields-440c5ac3.css",revision:null},{url:"assets/FileUploader-22e9b494.js",revision:null},{url:"assets/FontColor-03e9a6ff.js",revision:null},{url:"assets/IconPicker-43902fe0.js",revision:null},{url:"assets/index-34a9c97b.css",revision:null},{url:"assets/index-79582337.js",revision:null},{url:"assets/index-94cddbf2.js",revision:null},{url:"assets/IndicatorIcon-4dd9059c.js",revision:null},{url:"assets/InsertImage-d8d12cb6.js",revision:null},{url:"assets/InsertLink-4c05a612.js",revision:null},{url:"assets/InsertVideo-21cc1587.js",revision:null},{url:"assets/InvalidPage-a7611a1c.js",revision:null},{url:"assets/KanbanView-0440ca11.js",revision:null},{url:"assets/LayoutHeader-1f47b812.js",revision:null},{url:"assets/Lead-f5bd3ef4.js",revision:null},{url:"assets/Leads-bd5976b8.js",revision:null},{url:"assets/LeadsIcon-86dc61b1.js",revision:null},{url:"assets/LinkIcon-4bbaca23.js",revision:null},{url:"assets/ListBulkActions-9825310d.js",revision:null},{url:"assets/ListFooter-74d62f00.js",revision:null},{url:"assets/ListRows-818fdf9d.js",revision:null},{url:"assets/MarkAsDoneIcon-8e7573c5.js",revision:null},{url:"assets/MobileContact-645ded03.js",revision:null},{url:"assets/MobileDeal-15d063a0.js",revision:null},{url:"assets/MobileLayout-dc397d51.js",revision:null},{url:"assets/MobileLead-6c8d91f2.js",revision:null},{url:"assets/MobileNotification-5752efed.js",revision:null},{url:"assets/MobileOrganization-9c1e2eb3.js",revision:null},{url:"assets/NoteModal-ee3b9103.js",revision:null},{url:"assets/Notes-f555d4bf.js",revision:null},{url:"assets/notifications-f10717af.js",revision:null},{url:"assets/Organization-c4125a94.js",revision:null},{url:"assets/OrganizationModal-1216d9a3.js",revision:null},{url:"assets/organizations-31488e15.js",revision:null},{url:"assets/Organizations-e3687e20.js",revision:null},{url:"assets/OrganizationsIcon-18979377.js",revision:null},{url:"assets/PhoneIcon-206b2bf3.js",revision:null},{url:"assets/PinIcon-b877dc18.js",revision:null},{url:"assets/QuickEntryModal-c9cc5254.js",revision:null},{url:"assets/Section-8b41410b.js",revision:null},{url:"assets/settings-76fff180.js",revision:null},{url:"assets/SidePanelModal-38441ea1.js",revision:null},{url:"assets/statuses-7de18649.js",revision:null},{url:"assets/Switch.vue_vue_type_script_setup_true_lang-34bdad39.js",revision:null},{url:"assets/TaskIcon-a509cbac.js",revision:null},{url:"assets/TaskModal-50dd9ecc.css",revision:null},{url:"assets/TaskModal-d3bb0e4f.js",revision:null},{url:"assets/Tasks-2665b53a.js",revision:null},{url:"assets/useActiveTabManager-5c5d8759.css",revision:null},{url:"assets/useActiveTabManager-d63d67a2.js",revision:null},{url:"assets/view-2824ccd2.js",revision:null},{url:"assets/view-96305c41.css",revision:null},{url:"assets/ViewControls-ec6f393f.js",revision:null},{url:"assets/views-29c7636e.js",revision:null},{url:"assets/WebsiteIcon-612bfcb9.js",revision:null},{url:"assets/WhatsAppIcon-c40bbe0a.js",revision:null},{url:"index.html",revision:"75af7c7ac8ffa7f4888a09c4cb0b1508"},{url:"registerSW.js",revision:"c05366fa02b0c433223d141a5e2f2040"},{url:"manifest.webmanifest",revision:"8bd1dc465e950b2ed01f4b3c89979f05"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html")))}));
//# sourceMappingURL=sw.js.map