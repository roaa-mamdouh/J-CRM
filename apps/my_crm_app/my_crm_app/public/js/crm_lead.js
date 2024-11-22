frappe.ui.form.on('CRM Lead', {
    status: function (frm) {
        if (frm.doc.status === 'Showing') { // Trigger on specific status
            // Fetch Tasks linked to this Lead
            frappe.call({
                method: 'frappe.client.get_list',
                args: {
                    doctype: 'CRM Task',
                    filters: {
                        reference_doctype: frm.doctype, // Use the dynamic doctype of the current Lead
                        reference_docname: frm.doc.name // Reference the current Lead's name
                    },
                    fields: ['title', 'status', 'start_date'], // Specify fields to display
                    limit_page_length: 10
                },
                callback: function (response) {
                    const tasks = response.message;

                    if (!tasks || tasks.length === 0) {
                        // Create a dialog with Add Task functionality
                        const dialog = new frappe.ui.Dialog({
                            title: __('No Showing Event Found'),
                            fields: [
                                {
                                    label: __('Title'),
                                    fieldtype: 'Data',
                                    fieldname: 'title',
                                    reqd: 1
                                },
                                {
                                    label: __('Priority'),
                                    fieldtype: 'Select',
                                    fieldname: 'priority',
                                    reqd: 0,
                                    options: ['Low', 'Medium', 'High']
                                },
                                {
                                    label: __('Showing Description'),
                                    fieldtype: 'Small Text',
                                    fieldname: 'description'
                                },
                                {
                                    label: __('Date'),
                                    fieldtype: 'Date',
                                    fieldname: 'start_date'
                                }
                            ],
                            primary_action_label: __('Add Showing Event'),
                            primary_action: function (data) {
                                // Add Task linked to the Lead
                                frappe.call({
                                    method: 'frappe.client.insert',
                                    args: {
                                        doc: {
                                            doctype: 'CRM Task',
                                            title: data.title,
                                            description: data.description,
                                            start_date: data.start_date,
                                            reference_doctype: frm.doctype, // Link to the Lead
                                            reference_docname: frm.doc.name
                                        }
                                    },
                                    callback: function (res) {
                                        frappe.msgprint(__('Event Added Successfully!'));
                                        dialog.hide();
                                        frm.reload_doc(); // Refresh the Lead form
                                    }
                                });
                            }
                        });

                        dialog.show();
                    } else {
                        frappe.msgprint(__('Showing event already exists for this Lead.'));
                    }
                }
            });
        }
    }
});

