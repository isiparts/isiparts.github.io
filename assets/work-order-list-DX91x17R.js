!function(){try{var e="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{},r=(new e.Error).stack;r&&(e._sentryDebugIds=e._sentryDebugIds||{},e._sentryDebugIds[r]="eaae6789-2947-4c37-840e-aef2dbdb31d2",e._sentryDebugIdIdentifier="sentry-dbid-eaae6789-2947-4c37-840e-aef2dbdb31d2")}catch(s){}}();import{_ as e,g as r,r as s,u as t}from"./index-C2rmTpuu.js";import{n as a,a as i}from"./nav-C_TxfiHB.js";import"./@alpinejs/resize-Cv7BMxeO.js";import"./alpinejs-Bsy_J6yY.js";import"./pinecone-router-CZCXCXDM.js";import"./posthog-js-BaApA6Nk.js";import"./@sentry/browser-Dd5dbGEP.js";import"./@sentry/core-D-6ezOdR.js";import"./@sentry-internal/browser-utils-DaFcXMy-.js";import"./@sentry-internal/replay-bb_T2J0x.js";import"./flowbite-Dp0ZbCO1.js";import"./@popperjs/core-DhDCUcNI.js";import"./flowbite-datepicker-DpPyFf-S.js";const o={name:()=>"workOrders",template:()=>e((()=>import("./work-order-list-DJFrU6NU.js")),[]),data:()=>({user:r(),nav:null,aside:null,loading:!0,workOrders:[],async init(){console.log("work-order-list@init"),this.nav=await s(a),this.aside=await s(i),await this.loadWorkOrders()},async loadWorkOrders(){this.loading=!0;try{if("/or/me"===this.$router.route){const e=await fetch(t(`/isiWeb/web/v1/empresas/01/mecanicos?usuario=${this.user.usuario}`),{credentials:"include",headers:{"Content-Type":"application/json"}}),r=await e.json(),s=await fetch(t(`/isiWeb/web/v1/empresas/01/ordenes-reparacion?mec=${r.data[0].mec}&fecrep:eq=`),{credentials:"include",headers:{"Content-Type":"application/json"}}),a=await s.json();this.workOrders=a.data}if("/or/list"===this.$router.route){const e=await fetch(t(`/isiWeb/web/v1/empresas/01/ordenes-reparacion?almnro=${this.user.usuario}&fecrep:eq=`),{credentials:"include",headers:{"Content-Type":"application/json"}}),r=await e.json();this.workOrders=r.data}}catch(e){this.error=e.message}this.loading=!1}})};export{o as default};
//# sourceMappingURL=work-order-list-DX91x17R.js.map