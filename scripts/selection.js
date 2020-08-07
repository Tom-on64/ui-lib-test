/*
	Copyright (c) DeltaNedas 2020

	This program is free software: you can redistribute it and/or modify
	it under the terms of the GNU General Public License as published by
	the Free Software Foundation, either version 3 of the License, or
	(at your option) any later version.

	This program is distributed in the hope that it will be useful,
	but WITHOUT ANY WARRANTY; without even the implied warranty of
	MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
	GNU General Public License for more details.

	You should have received a copy of the GNU General Public License
	along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/

const ui = this.global.uiLib;

ui.onLoad(() => {
	const dialog = extendContent(BaseDialog, "<title>", {
		rebuild(title, values, selector, names) {
			this.cont.clear();
			this.title.text = title;

			this.cont.pane(t => {
				for (var i in values) {
					const key = i;
					t.button(names(i, values[i]), () => {
						selector(values[key]);
						this.hide();
					}).growX().pad(8);
					t.row();
				}
			}).size(400, 350);
		}
	});
	dialog.addCloseButton();
	ui.selection = dialog;
});
