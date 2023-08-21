import React, { useEffect, useState } from "react";
import "../assets/css/footer.css";
import { hideLoader, showLoader, isLangSk } from "../assets/js/helpers";
import { Helmet } from "react-helmet-async";
import '../assets/css/ochrana.css'
import { useTranslation } from "react-i18next";

const OchranaUdajovComponent = () => {
  const [t, i18n] = useTranslation()
  const [lang, setLang] = useState();

  useEffect(() => {
    showLoader();
    i18n.changeLanguage(localStorage.getItem("lang"))
    let lang = isLangSk();
    setLang(lang)
    setTimeout(hideLoader, 500);
  }, []);

  return (
    <div style={{ backgroundColor: "#0c141b" }}>


      <div className="container" style={{ marginTop: "120px", marginBottom: "7%", color: "rgb(182, 182, 182)" }}>
        <div className="info-background">
          <Helmet>
            <title>Ochrana osobných údajov | Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023</title>
            <meta
              name="description"
              content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023"
            ></meta>
            <meta name="keywords" content="Spravodlivosť | Strana Spravodlivosť | Politická strana Spravodlivosť | Voľby 2023" />
            <link rel="canonical" href={`/ochrana`}></link>
          </Helmet>
          <div>
            <div id="text-id-1">
              <h2 className="mb-5">{!lang ? t('privacy.heading') : "OCHRANA OSOBNÝCH ÚDAJOV"}</h2>
              <h3>{!lang ? t('privacy.whatFor.heading') : "Na čo slúžia tieto informácie?"}</h3>
              <p>
                {!lang ? t('privacy.whatFor.text') : "Tieto informácie o spracúvaní a ochrane Vašich osobných údajov vysvetľujú, kto sme, prečo a ako spracúvame osobné údaje, aké sú Vaše práva v prípade, ak ste osobou dotknutou týmto spracúvaním, a ako nás môžete v prípade potreby kontaktovať."}
              </p>
              <h3>{!lang ? t('privacy.whoAreWe.heading') : "Kto sme?"}</h3>
              <p>
                {!lang ? t('privacy.whoAreWe.text') : "Sme politická strana SPRAVODLIVOŤ, so sídlom Tomášikova 3/A, 821 01 Bratislava-Ružinov, Slovenská republika, IČO: 42 257 441, zapísaná v Registri politických strán vedenom Ministerstvom vnútra Slovenskej republiky pod č. OVVS 3 – 2011/029916 a sme tzv. prevádzkovateľom, ktorý je v súlade s príslušnou legislatívou oprávnený spracúvať Vaše osobné údaje, a to v súvislosti s činnosťou politickej strany, teda zároveň spracúvame Vaše osobné údaje. Vaše osobné údaje spracúvame v súlade s príslušnými právnymi predpismi, najmä v súlade so zákonom č. 18/2018 Z. z. o ochrane osobných údajov, a týmito informáciami. Naše kontaktné údaje sú:"}
                <br />
                {!lang ? t('privacy.whoAreWe.text2') : "SPRAVODLIVOSŤ Politická strana registrovaná Ministerstvom vnútra SR v registri politických strán pod číslom OVVS 3 – 2011/029916"}
                <br />
                {!lang ? t('privacy.whoAreWe.text3') : "Sídlo: Tomášikova 3/A, 821 01 Bratislava-Ružinov, Slovenská republika"}
                <br />
                {!lang ? t('privacy.whoAreWe.text4') : "IČO: 42 257 441"}
                <br />
                {!lang ? t('privacy.whoAreWe.text5') : "DIČ: 2820011898"}
                <br />
                {!lang ? t('privacy.whoAreWe.text6') : "Bankové spojenie: Tatra banka, a.s."}
                <br />
                {!lang ? t('privacy.whoAreWe.text7') : "Číslo účtu: SK68 1100 0000 0029 2086 6869"}
                <br />
                {!lang ? t('privacy.whoAreWe.text8') : "Email: spravodlivost.politicka.strana@gmail.com"}
              </p>
            </div>
            <div id="text-id-2">
              <h3>{!lang ? t('privacy.when.heading') : "Kedy spracúvame vaše osobné údaje?"}</h3>
              <p>{!lang ? t('privacy.when.text') : "Vaše osobné údaje môžeme spracúvať v nasledovných prípadoch:"}</p>
              <ul>
                <li>{!lang ? t('privacy.when.list.item1') : "Zaregistrovali ste sa na našich webových stránkach."}</li>
                <li>{!lang ? t('privacy.when.list.item2') : "Prihlásili ste sa na odber našich noviniek vo forme newslettra."}</li>
                <li>{!lang ? t('privacy.when.list.item3') : "Zúčastnili ste sa našich udalostí."}</li>
                <li>{!lang ? t('privacy.when.list.item4') : "Podpísali ste naše petície či hárky na vznik hnutia."}</li>
                <li>{!lang ? t('privacy.when.list.item5') : "Stali ste alebo máte záujem stať sa naším členom/členkou, dobrovoľníkom/dobrovoľníčkou alebo darcom/darkyňou."}</li>
                <li>{!lang ? t('privacy.when.list.item6') : "Komentujete, „lajkujete“ alebo máte iné interakcie s našim obsahom na našich webových stránkach alebo profiloch zriadených na sociálnych sieťach, a to aj vrátane osobných profilov našich volebných lídrov a líderiek."}</li>
              </ul>
              <p>
                {!lang ? t('privacy.when.text2') : "Vo všetkých z týchto prípadov sme Vaše osobné údaje mohli získať priamo od Vás, napríklad cez našu webovú stránku, cez naše účty na sociálnych sieťach, pri osobnom vyplnení dotazníka alebo pri inej príležitosti."}
              </p>
            </div>
            <div id="text-id-3">
              <h3>{!lang ? t('privacy.whatKind.heading') : "Ako osobné údaje spracúvame?"}</h3>
              <p>{!lang ? t('privacy.whatKind.heading') : "Osobné údaje, ktoré spracúvame, zahŕňajú predovšetkým:"}</p>
              <ul>
                <li>{!lang ? t('privacy.whatKind.list.item1') : "Vaše meno a priezvisko;"}</li>
                <li>{!lang ? t('privacy.whatKind.list.item2') : "Váš dátum narodenia a Vaša štátna príslušnosť, v prípade ak ste sa stali alebo máte záujem stať sa naším členom;"}</li>
                <li>{!lang ? t('privacy.whatKind.list.item3') : "Vaše kontaktné údaje, medzi ktoré patrí adresa Vášho trvalého bydliska, telefónne číslo, e-mailová adresa, účet na sociálnych sieťach a ďalšie osobné či pracovné kontaktné údaje."}</li>
                <li>{!lang ? t('privacy.whatKind.list.item4') : "Údaje týkajúce sa prejavov sympatií, komentárov, či iných interakcií s obsahom na našich profiloch zriadených na sociálnych sieťach (tzv. fanpages) alebo na našich webstránkach."}</li>
              </ul>
              <h3>{!lang ? t('privacy.whatKind.heading2') : "Informácie, ktoré získavame z našej vzájomnej komunikácie"}</h3>
              <p>
                {!lang ? t('privacy.whatKind.text2') : "Okrem osobných údajov môžeme získavať a následne spracúvať ďalšie údaje a informácie, ktoré nám oznámite alebo ktoré vyplývajú z našej vzájomnej komunikácie cez telefón, e-mail, našu webovú stránku, sociálne siete alebo iné prostriedky."}
              </p>
            </div>
            <div id="text-id-4">
              <h3>{!lang ? t('privacy.information.heading') : "Informácie, ktoré získavame z používania cookies."}</h3>
              <p>
                {!lang ? t('privacy.information.text1') : "Na našej webovej stránke sú používané tzv. cookies. Cookies sú malé textové súbory, ktoré sú uložené vo Vašom počítači a môžu byť ukladané Vaším internetovým prehliadačom na účely identifikácie Vášho zariadenia a technického zlepšenia či prispôsobenia fungovania našej stránky, ako aj na získanie štatistických a analytických údajov. Cookies používané na našej webovej stránke nám neumožňujú konkrétnu identifikáciu užívateľa stránky, pričom údaje získané z cookies sú spravidla zhromažďované v agregovanej forme."}
                <br />
                {!lang ? t('privacy.information.text2') : "Akceptácia cookies nie je nevyhnutnou požiadavkou pre umožnenie návštevy našej webovej stránky. Väčšina internetových prehliadačov automaticky akceptuje cookies, no v nastaveniach Vášho prehliadača môžete tieto nastavenia ľubovoľne upraviť. V prípade, ak sa rozhodnete cookies neakceptovať, je možné, že niektoré funkcie našej stránky nebudú správne fungovať."}
                <br />
                {!lang ? t('privacy.information.text3') : "Najčastejšie nami používané cookies sú dočasné cookies (tzv. session cookies), ktoré budú vymazané po ukončení relácie prehliadača. Okrem toho existujú aj dlhodobé cookies (tzv. persistant cookies), pomocou ktorých môžeme rozpoznať Vaše zariadenie, z ktorého ste v minulosti navštívili našu stránku. Cookies nespôsobujú žiadne škody na Vašom zariadení a neobsahujú vírusy alebo škodlivé kódy."}
              </p>
              <p>
                {!lang ? t('privacy.information.text4') : "Naša webová stránka používa výlučne cookies tretích strán, ktoré nám poskytujú služby, a o ktorých môžete nájsť bližšie informácie na nasledovných stránkach:"}
              </p>
              <ul>
                <li>{!lang ? t('privacy.information.list.item1') : "Google Analytics;"}</li>
                <li>{!lang ? t('privacy.information.list.item2') : "Facebook;"}</li>
                <li>{!lang ? t('privacy.information.list.item3') : "eTarget;"}</li>
                <li>{!lang ? t('privacy.information.list.item4') : "Nation Builder;"}</li>
                <li>{!lang ? t('privacy.information.list.item5') : "Quorum."}</li>
              </ul>
            </div>
            <div id="text-id-5">
              <h3>
                {!lang ? t('privacy.informationSocialMedia.heading') : "Informácie, ktoré získavame z interakcii na sociálnych sieťach"}
              </h3>
              <p>
                {!lang ? t('privacy.informationSocialMedia.text1') : "pri marketingových aktivitách spracúvane len bežné kategórie  osobných údajov špecifikované vyššie. žiadne osobitné kategórie  osobných údajov na tieto účely nespracúvame. údaje o potenciálnych  sympatiách, prejavenom záujme a interakciách s digitálnym obsahom  o našej politickej strane spravodlivosť nepovažujeme za vaše  politické názory, či politické presvedčenie nakoľko veríme, že nás  v online priestore sledujú aj naši ne-sympatizanti a politickí  súperi. osobné profily našich politických lídrov prípadne našich  kandidátov považujeme za súčasť spracúvania, ktoré vykonáva  spravodlivosť."}
              </p>
              <h3> {!lang ? t('privacy.informationSocialMedia.heading2') : "Ako spracúvame Vaše osobné údaje?"}</h3>
              <p> {!lang ? t('privacy.informationSocialMedia.text2') : "Vaše osobné údaje spracúvame za účelom:"}</p>
              <ul>
                <li>
                  {!lang ? t('privacy.informationSocialMedia.list.item1') : "poskytovania informácií o našej činnosti, a to vrátane  zasielania e-mailov, sms správ či telefonických hovorov o našich  novinkách a/alebo za účelom odpovedania na otázky, ktoré ste nám  priamo zaslali;"}
                </li>
                <li>
                  {!lang ? t('privacy.informationSocialMedia.list.item2') : "správy a organizácie našich vzťahov s členmi/členkami,  podporovateľmi/podporovateľkami, dobrovoľníkmi/dobrovoľníčkami,  alebo osobami, ktoré majú záujem o našu činnosť; a"}
                </li>
                <li>
                  {!lang ? t('privacy.informationSocialMedia.list.item3') : "správy našej webovej stránky a našich účtov na sociálnych  sieťach, s cieľom zobraziť obsah stránky a účtov čo  najefektívnejšie, na základe testovaní a analýzy dát."}
                </li>
              </ul>
              <h3>{!lang ? t('privacy.informationSocialMedia.heading3') : "Komu sprístupňujeme Vaše osobné údaje?"}</h3>
              <p>
                {!lang ? t('privacy.informationSocialMedia.text3') : "vaše osobné údaje môžeme zverejniť alebo sprístupniť na základe  rozhodnutia súdu resp. iných štátnych orgánov oprávnených  požadovať ich zverejnenie a/alebo sprístupnenie a na základe resp.  v súlade s povinnosťou uloženou príslušnými právnymi predpismi."}
              </p>
              <h3>
                {!lang ? t('privacy.informationSocialMedia.heading4') : "Aký je právny základ pre naše spracúvanie Vašich osobných údajov?"}
              </h3>
              <p>
                {!lang ? t('privacy.informationSocialMedia.text4') : "vaše osobné údaje spracúvame predovšetkým na základe súhlasu,  ktorý ste nám udelili pred začatím spracúvania. možnosti ako  odvolať súhlas so spracúvaním uvádzame nižšie v tomto dokumente."}
              </p>
              <p>
                {!lang ? t('privacy.informationSocialMedia.text5') : "Ak je to potrebné, Vaše osobné údaje môžeme ďalej spracúvať v prípade:"}
              </p>
              <ul>
                <li>
                  {!lang ? t('privacy.informationSocialMedia.list2.item1') : "ak ste s nami uzatvorili alebo plánujete uzatvoriť zmluvu,  nevyhnutnosti plnenia zmluvy, alebo v súvislosti s predzmluvnými  rokovaniami pred uzavretím takejto zmluvy; alebo"}
                </li>
                <li>{!lang ? t('privacy.informationSocialMedia.list2.item2') : "nevyhnutnosti plnenia našich zákonných povinností."}</li>
              </ul>
            </div>
            <div id="text-id-6">
              <h3>{!lang ? t('privacy.where.heading') : "Kde spracúvame Vaše osobné údaje?"}</h3>
              <p>
                {!lang ? t('privacy.where.text1') : "vaše osobné údaje spracúvame najmä na území európskej únie, resp.  na území štátov, ktoré sú zmluvnou stranou dohody o európskom  hospodárskom priestore."}
                <br />
                {!lang ? t('privacy.where.text2') : "napriek tomu niektorí naši dodávatelia, a to predovšetkým osoby,  ktorých služby využívame na prevádzku našej webovej stránky, môžu  spracúvať rôzne dáta aj na území spojených štátov amerických  (usa), pričom medzi týmito dátami môžu byť spracúvané aj osobné  údaje."}
                <br />
                {!lang ? t('privacy.where.text3') : "prenos osobných údajov do usa je možné uskutočniť na základe  vykonávacieho rozhodnutia komisie (eú) 2016/1250 z 12. júla 2016 o  primeranosti ochrany poskytovanej štítom na ochranu osobných  údajov medzi eú a usa (tzv. eu-u.s. privacy shield)."}
              </p>
              <h3>{!lang ? t('privacy.where.heading2') : "Ako dlho spracúvame Vaše osobné údaje?"}</h3>
              <p>
                {!lang ? t('privacy.where.text4') : "vaše osobné údaje spracúvame len na dobu nevyhnutnú na dosiahnutie  účelu, pre ktorý boli vaše osobné údaje získané. osobné údaje,  ktoré spracúvame na základe vášho súhlasu môžeme spracúvať počas  celej doby trvania platnosti vášho súhlasu, ktorá je päť rokov od  jeho udelenia."}
                <br />
                {!lang ? t('privacy.where.text5') : "po uplynutí tejto doby budú vaše osobné údaje vymazané, s výnimkou  prípadov kedy je ich ďalšie spracúvanie potrebné za účelom  zabezpečenia súladu s našimi zákonnými povinnosťami alebo z iných  oprávnených dôvodov v súlade so všeobecne záväznými právnymi  predpismi."}
              </p>
              <h3>{!lang ? t('privacy.where.heading3') : "Aké sú Vaše práva?"}</h3>
              <p>
                {!lang ? t('privacy.where.text6') : "V súvislosti so spracúvaním Vašich osobných údajov máte nasledovné práva:"}
              </p>
              <ul>
                <li>{!lang ? t('privacy.where.list.item1') : "Máte právo požiadať nás o prístup k Vašim osobným údajom, ktoré spracúvame."}</li>
                <li>{!lang ? t('privacy.where.list.item2') : "Máte právo požiadať nás o opravu nesprávnych osobných údajov, ktoré spracúvame."}</li>
                <li>{!lang ? t('privacy.where.list.item3') : "Máte právo požiadať nás o vymazanie Vašich osobných údajov, ktoré spracúvame."}</li>
                <li>{!lang ? t('privacy.where.list.item4') : "Máte právo odvolať súhlas so spracúvaním vašich osobných údajov;  po doručení odvolania nebudeme vaše osobné údaje ďalej  spracúvať. odvolanie vášho súhlasu nemá vplyv na zákonnosť  spracúvania, ktoré sme vykonávali pred jeho odvolaním."}</li>
                <li>{!lang ? t('privacy.where.list.item5') : "Máte právo podať sťažnosť na nezákonné spracúvanie osobných  údajov. s vašou sťažnosťou sa môžete kedykoľvek obrátiť na nás,  alebo ju môžete podať na úrad na ochranu osobných údajov  slovenskej republiky."}</li>
              </ul>
            </div>
            <div id="text-id-7">
              <h3>
                {!lang ? t('privacy.howTo.heading') : "Ako uplatniť Vaše práva v súvislosti so spracovaním osobných údajov?"}
              </h3>
              <p>
                {!lang ? t('privacy.howTo.text1') : "Ktorékoľvek z vyššie uvedených práv môžete uplatniť zaslaním správy na náš e-mail spravodlivost.politicka.strana@gmail.com alebo na našu adresu:"}
                <br />
                {!lang ? t('privacy.howTo.text2') : "SPRAVODLIVOSŤ"}
                <br />
                {!lang ? t('privacy.howTo.text3') : "Tomášikova 3/A, 821 01 Bratislava-Ružinov"}
                <br />
                {!lang ? t('privacy.howTo.text4') : "Prosíme berte na vedomie, že pred tým, ako vám v tejto súvislosti  poskytneme akékoľvek informácie, sme za účelom overenia vašej  totožnosti oprávnení požiadať vás o doplnenie údajov a informácií."}
              </p>
              <h3>{!lang ? t('privacy.howTo.heading2') : "Úrad na ochranu osobných údajov Slovenskej republiky"}</h3>
              <p>{!lang ? t('privacy.howTo.text5') : "Úrad na ochranu osobných údajov slovenskej republiky je orgánom  štátnej správy, ktorý vykonáva dozor nad ochranou osobných údajov  na území slovenskej republiky."}
                <br />
                {!lang ? t('privacy.howTo.text6') : "Úrad je oprávnený zaoberať sa vašimi sťažnosťami týkajúcimi sa  spracúvania vašich osobných údajov. zároveň vám úrad môže  poskytnúť ďalšie informácie o vašich právach a povinnostiach v  súvislosti s vašimi osobnými údajmi."}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OchranaUdajovComponent;
