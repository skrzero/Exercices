<?php
class Utilisateur{
   private $nom;
   private $email;
   public function afficherInfos(){
    echo "mon nom est $this->nom et mon email est $this->email";

}
   public function __construct($nom,$email){
        $this->nom = $nom;
        $this->email = $email;
        echo "compte creer <br/>";
       
    }

   public function __destruct(){
          echo "element supprimer <br/>";
     }

    public function setNom($nom){
        $this->nom = $nom;
        echo $nom;
     }
    public function setEmail($email){
        $this->email = $email;
        echo $email;
     }
     public function getNom(){
        return $this->nom;
     }
     public function getEmail(){
        return $this->email;
     }

}
$users = new Utilisateur("pat","pat@gmail.com <br/>");
$users ->afficherInfos();

$users1 = new Utilisateur("pierre","pierre@gmail.com");
$users1 ->setNom("pierre <br/>");
$users1 ->setEmail("pierre@gmail.com <br/>");
echo $users1->getNom();
echo $users1->getEmail();


?>