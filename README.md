# A-Welzijn Panel en Panel fields

v1.0.5

### Hoe het eruit ziet

![Screenshot](https://s3.amazonaws.com/f.cl.ly/items/3E0j2y2G1F01421M431p/table.PNG)
![Screenshot](https://s3.amazonaws.com/f.cl.ly/items/0A1Y0T1S1T0V2l1b2t17/tableloading.PNG)

### Hoe het te gebruiken

```html
<div class="col-lg-12">
	<table a-welzijn-loading-overlay loading="ctrl.loading">
		<thead>
			<tr>
				<th>Naam</th>
				<th>Leeftijd</th>
				<th>Geslacht</th>
			</tr>
		</thead>
		<tbody>
			<tr ng-repeat="persoon in ctrl.personen track by $index">
				<td>{{persoon.naam}}</td>
				<td>{{persoon.geboortedatum | leeftijd}}</td>
				<td>{{persoon.geslachtscode | geslacht}}</td>
			</tr>
		</tbody>
	</table>
</div>
```

Deze directive is ook ingebouwd in het de [panel](https://github.com/A-welzijn/panel)-directive en gebruik je zo:

```html
<a-welzijn-panel title="Testje" loading="ctrl.loading">
    <div class="panel-body-heading">
        Jawadde dadde
    </div>
    <div class="row">
        <p>Random tekst.</p>
    </div>
</a-welzijn-panel>
```
![Screenshot](https://s3.amazonaws.com/f.cl.ly/items/0t3N0C1N0g0G2u1H261v/panelloading.PNG)