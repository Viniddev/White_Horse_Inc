"use client";
import "./profile.scss";
import "../../styles/globals.scss";
import React from "react";
import FormPadrao from "@/components/formPadraoUsuario/form";
import InformacoesImutaveis from "@/components/informacoesImutaveis/informacoesImutaveis";
import { EMPTY_USER } from "@/utils/constants/consts";
import { fetchUserProfileInformations } from "@/routes/GetUserProfileInformations";
import { UserInformations } from "@/@types/req";

export default function Profile() {
  const [userData, setUserData] = React.useState<UserInformations>(EMPTY_USER);

  async function GetUserInformations(){
    var email: string | null = sessionStorage.getItem("Sub");
    if(email != null){
      var teste: any = await fetchUserProfileInformations(email);
      return teste.data;
    }
  }

  React.useEffect(() => {
    const fetchData = async () => {
      var teste = await GetUserInformations();
      setUserData(teste);
    };

    fetchData();
  }, []);

  return (
    <section className="ProfileConteiner flexRow">
      <form action="submit" className="FormularioProfile">
        <div className="sectionProfileImg">
          <div className="headerInformations flexColumn">
            <img
              src="./profile.png"
              alt="profile image"
              className="imgProfile"
            />
          </div>
          <div className="espacoVazio">{/* espaco em branco */}</div>
        </div>
        <div className="sectionUserInformations">
          <div className="headerInformations ajusteEspacamento">
            <InformacoesImutaveis IsRegister={false} DefaultUserInformations={userData} />
          </div>
          <div className="boxUserInformations">
            <FormPadrao IsRegister={false} DefaultUserInformations={userData} />
          </div>
        </div>
      </form>
    </section>
  );
}
