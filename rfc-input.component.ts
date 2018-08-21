import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";

@Component({
  selector: "shared-rfc-input",
  templateUrl: "./rfc-input.component.html",
  styleUrls: ["./rfc-input.component.css"]
})
export class RfcInputComponent implements OnInit {
  /**
   * Por defecto considerara el RFC para personas fisicas.
   * El valor para personas fisicas será: 0
   * El valor para personas morales será: 1
   */
  @Input("personTypeValue")
  personTypeValue: number;

  @Output("updateRFC")
  updateRFC: EventEmitter<any> = new EventEmitter<any>();

  public RFC: string;
  public caracteres;

  public maxlength;
  public minlength;
  public person_type_description;

  public msg_ph_suppl_RFC;
  public msg_ptrn_err_suppl_RFC;
  public msg_min_err_suppl_RFC;
  public msg_max_err_suppl_RFC;

  constructor() {}

  /**
   * 0 to individuals.
   * 1 to legal entities.
   */
  ngOnInit() {
    if (this.personTypeValue === 1) {
      this.changeToLegalEntitie();
    } else {
      this.changeToIndividual();
    }
  }

  UpdateRFC() {
    if (this.RFC) {
      if (this.RFC != null && this.RFC != "") {
        this.updateRFC.emit({ rfc: this.RFC });
      }
    }
  }

  changeToLegalEntitie() {
    this.person_type_description = "morales";
    this.caracteres = 12;
    this.minlength = this.caracteres;
    this.maxlength = this.caracteres;
    this.msg_ph_suppl_RFC = "Por ejemplo: SDR991007OPP";
    this.msg_min_err_suppl_RFC =
      "Por favor completa el RFC (" +
      this.caracteres +
      " caracteres para personas " +
      this.person_type_description +
      ")";
    this.msg_max_err_suppl_RFC =
      "El RFC para personas " +
      this.person_type_description +
      " solo es de " +
      this.caracteres +
      " caracteres";
  }

  changeToIndividual() {
    this.caracteres = 13;

    this.maxlength = this.caracteres;
    this.minlength = this.caracteres;
    this.person_type_description = "fisicas";

    this.msg_ph_suppl_RFC = "Por ejemplo: SDRR991007OPP";
    this.msg_ptrn_err_suppl_RFC =
      "La estructura no coincide con el formato del RFC, por favor revisa tu RFC";
    this.msg_min_err_suppl_RFC =
      "Por favor completa el RFC (" +
      this.caracteres +
      " caracteres para personas " +
      this.person_type_description +
      ")";
    this.msg_max_err_suppl_RFC =
      "El RFC para personas " +
      this.person_type_description +
      " solo es de " +
      this.caracteres +
      " caracteres";
  }
}
