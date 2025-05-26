  <?php
  include ("header.php");
  ?>
  <h1>Fichiers PHP dans le dossier courant</h1>
  <ul>
    <?php
      // Liste tous les fichiers PHP du répertoire courant
      $fichiers = glob("*.php");

      if ($fichiers) {
        foreach ($fichiers as $fichier) {
          // Ne pas afficher index.php lui-même
          if ($fichier !== basename(__FILE__)) {
            echo '<li><a href="' . $fichier . '">' . $fichier . '</a></li>';
          }
        }
      } else {
        echo '<li>Aucun fichier PHP trouvé.</li>';
      }
    ?>
  </ul>
  <?php
  include ("footer.php");
  ?>
