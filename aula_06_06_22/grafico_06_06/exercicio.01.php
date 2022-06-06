<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Lidos de 2022</title>
</head>
<body>
<div id="piechart" style="width: 1700px; height: 900px;"></div>

    <?php
    $qtde = [225, 119, 315, 113];
    $generos = ['Mussarela','Portuguesa','Frango','Calabresa'];
    $tam = count($qtde);
    ?>


<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>
    <script type="text/javascript">
      google.charts.load('current', {'packages':['corechart']});
      google.charts.setOnLoadCallback(drawChart);

      function drawChart() {

        var data = google.visualization.arrayToDataTable([
          ['Lidos', 'Generos'],
        <?php 
            for($i=0;$i<$tam;$i++){
                ?>
                    ['<?=  $generos[$i]; ?>',<?=  $qtde[$i]; ?>],                    
                <?php

            }
        ?>
        ]);

        var options = {
          title: 'Pizzas vendidas hoje!',
          is3D: true,
          colors: ['#fbec5d', '#ccff33', '#ffdb58', '#fde910', '#ffd700'],
        };

        var chart = new google.visualization.PieChart(document.getElementById('piechart'));

        chart.draw(data, options);
      }
</script>
</body>
</html>