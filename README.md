**Polish letters sorting plugin for jQuery Datatables**

**Wtyczka dla poprawnego sortowania polskich znaków w jQuery Datatables**


*Example of usage*

```javascript
$('#table-with-polish-signs').DataTable({
	'order' : [[ 1, "desc" ]], //Sorting by second column (descending)
	
	'aoColumns': [
			null,
			{ "sType": "polstring" }, //Sorting by second column with polish letters (sortowanie drugiej kolumny zpolskimi literami
			null,
	]
});
```