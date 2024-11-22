(() => {
  // ../sidebar_collapsed_default/sidebar_collapsed_default/public/js/collapse_sidebar.js
  frappe.provide("frappe.ui.pages");
  var originalSetupSidebarToggle = frappe.ui.Page.prototype.setup_sidebar_toggle;
  frappe.ui.Page.prototype.setup_sidebar_toggle = function() {
    let sidebar_toggle = $(".page-head").find(".sidebar-toggle-btn");
    let sidebar_wrapper = this.wrapper.find(".layout-side-section");
    sidebar_wrapper.toggle();
    if (this.disable_sidebar_toggle || !sidebar_wrapper.length) {
      sidebar_toggle.last().remove();
    } else {
      if (!frappe.is_mobile()) {
        sidebar_toggle.attr("title", __("Toggle Sidebar"));
      }
      sidebar_toggle.attr("aria-label", __("Toggle Sidebar"));
      sidebar_toggle.tooltip({
        delay: { show: 600, hide: 100 },
        trigger: "hover"
      });
      sidebar_toggle.click(() => {
        if (frappe.utils.is_xs() || frappe.utils.is_sm()) {
          this.setup_overlay_sidebar();
        } else {
          sidebar_wrapper.toggle();
        }
        $(document.body).trigger("toggleSidebar");
        this.update_sidebar_icon();
      });
    }
  };
})();
//# sourceMappingURL=collapse_sidebar.bundle.O57S5NFO.js.map
