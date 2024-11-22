# Copyright (c) 2024, Frappe Technologies Pvt. Ltd. and contributors
# For license information, please see license.txt

# import frappe
from frappe.model.document import Document


class Unit(Document):
	# begin: auto-generated types
	# This code is auto-generated. Do not modify anything in this block.

	from typing import TYPE_CHECKING

	if TYPE_CHECKING:
		from frappe.types import DF
		from propms.property_management_solution.doctype.unit_assets.unit_assets import UnitAssets

		bedroom: DF.Int
		builtup_area: DF.Float
		carpet_area: DF.Float
		common_bathroom: DF.Int
		description: DF.Text | None
		facing: DF.Literal["North", "North-East", "East", "South-East", "West", "North-West", "South-West", "South"]
		finishing: DF.Literal["Fully Finished", "Semi Finished", "Unfinished"]
		furnishing: DF.Literal["Fully Furnished", "Semi Furnished", "Unfurnished"]
		image: DF.AttachImage | None
		master_bedroom: DF.Int
		name1: DF.Data | None
		num_of_parking: DF.Int
		rent: DF.Currency
		security_deposit: DF.Currency
		smooking: DF.Check
		status: DF.Literal["Available", "Booked", "Sale", "On Lease", "Off Lease in 3 Months", "Sold", "Managed for customer"]
		title_deed_number: DF.Data | None
		type: DF.Link | None
		unit_assets: DF.Table[UnitAssets]
		unit_number: DF.Data | None
		unit_owner: DF.Link | None
	# end: auto-generated types
	pass
