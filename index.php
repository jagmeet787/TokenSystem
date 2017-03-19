<!DOCTYPE html>
<html>
<head>
	<title>Token System</title>
	<link rel="stylesheet" href="style.css">
</head>

<body>
	<table class="container">
		<thead>
			<tr>
				<th><h2>Doctor Name</h2></th>
				<th><h2>Token Number</h2></th>	
			</tr>
		</thead>
		
		<tbody>
			<tr>
				<td>Dr. Batra</td>
				<?php
					$data = file_get_contents('./jsonD');
					$obj = json_decode($data);
					echo "<td>";
					print $obj->{"rajeev"};
					echo "</td>";
					echo "</tr>";
					echo "<tr>";
					echo "<td>Dr. Batra</td> <td> ";
					print $obj->{"batra"};
					echo "</td>";
					echo "</tr>";
					echo "<tr>";
					echo "<td>Dr. Sanjeev</td> <td>";
					print $obj->{"sanjeev"};
					echo "</td>";
					echo "</tr>";
					echo "<tr>";
					echo "<td>Dr. Vinay</td> <td>";
					print $obj->{"vinay"};
					echo "</td>";
					echo "</tr>";
				?>
	    </tbody>
	</table>
</html>