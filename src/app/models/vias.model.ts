export class Vias {
  private _codTipoVia: string;
  private _codVia: string;
  private _codViaCatastro: string;
  private _nomOficial: string;
  private _tradOficial: string;

  constructor(codTipoVia, codVia, codViaCatastro, nomOficial, tradOficial) {
    this._codTipoVia = codTipoVia;
    this._codVia = codVia;
    this._codViaCatastro = codViaCatastro;
    this._nomOficial = nomOficial;
    this._tradOficial = tradOficial;
  }

  /**
   * Getter codTipoVia
   * @return {string}
   */
  public getCodTipoVia(): string {
    return this._codTipoVia;
  }

  /**
   * Getter codVia
   * @return {string}
   */
  public getCodVia(): string {
    return this._codVia;
  }

  /**
   * Getter codViaCatastro
   * @return {string}
   */
  public getCodViaCatastro(): string {
    return this._codViaCatastro;
  }

  /**
   * Getter nomOficial
   * @return {string}
   */
  public getNomOficial(): string {
    return this._nomOficial;
  }

  /**
   * Getter tradOficial
   * @return {string}
   */
  public getTradOficial(): string {
    return this._tradOficial;
  }

  /**
   * Setter codTipoVia
   * @param {string} value
   */
  public setCodTipoVia(value: string) {
    this._codTipoVia = value;
  }

  /**
   * Setter codVia
   * @param {number} value
   */
  public setCodVia(value: string) {
    this._codVia = value;
  }

  /**
   * Setter codViaCatastro
   * @param {string} value
   */
  public setCodViaCatastro(value: string) {
    this._codViaCatastro = value;
  }

  /**
   * Setter nomOficial
   * @param {string} value
   */
  public setNomOficial(value: string) {
    this._nomOficial = value;
  }

  /**
   * Setter tradOficial
   * @param {string} value
   */
  public setTradOficial(value: string) {
    this._tradOficial = value;
  }
}
