/* =========================================================
   SESSION 1
   ANDRE & INTAN

   SISTEM NAMA TAMU + WHATSAPP
========================================================= */


/* =========================================================
   AMBIL DATA DARI URL
========================================================= */

const urlParams =
  new URLSearchParams(
    window.location.search
  );


const guestName =
  urlParams.get("to");


const guestWhatsApp =
  urlParams.get("wa");


/* =========================================================
   TAMPILKAN NAMA TAMU
========================================================= */

const guestElement =
  document.getElementById("guestName");


if (guestElement) {

  if (
    guestName &&
    guestName.trim() !== ""
  ) {

    guestElement.textContent =
      guestName.trim();

  } else {

    guestElement.textContent =
      "Tamu Undangan";

  }

}


/* =========================================================
   BUTTON BUKA UNDANGAN
========================================================= */

const openButton =
  document.getElementById(
    "openInvitation"
  );


if (openButton) {

  openButton.addEventListener(
    "click",
    function () {

      openButton.classList.add(
        "clicked"
      );


      setTimeout(
        function () {

          openButton.classList.remove(
            "clicked"
          );


          alert(
            "Tahap 1 selesai, saatnya masuk session 2."
          );

        },
        180
      );

    }
  );

}


/* =========================================================
   DATA WHATSAPP
=========================================================

   Nomor WhatsApp dibaca dari URL,
   tetapi TIDAK ditampilkan ke tamu.

   Contoh:
   ?to=Andre&wa=082110738075

========================================================= */

if (guestWhatsApp) {

  console.log(
    "WhatsApp tamu:",
    guestWhatsApp
  );

}