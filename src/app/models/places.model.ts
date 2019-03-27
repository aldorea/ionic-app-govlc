import { Vias } from "./vias.model";

export class Place {
  private _idVia: string;
  private _nombre: string;
  private _numPortal: number;
  private _telefono: number;
  private _idNotes: number;
  private _visitado: boolean;
  private _via: Vias;
  private _latitude: number;
  private _longitude: number;

  constructor(
    idVia: string,
    nombre: string,
    numPortal: number,
    latitude?: number,
    longitude?: number,
    telefono?: number,
    idNotes?: number,
    visitado?: boolean,
    via?: Vias
  ) {
    this._idVia = idVia;
    this._nombre = nombre;
    this._numPortal = numPortal;
    this._telefono = telefono;
    this._idNotes = idNotes;
    this._visitado = visitado;
    this._via = via;
    this._latitude = latitude;
    this._longitude = longitude;
  }

  /**
   * Getter idVia
   * @return {number}
   */
  public getIdVia(): string {
    return this._idVia;
  }

  /**
   * Getter nombre
   * @return {string}
   */
  public getNombre(): string {
    return this._nombre;
  }

  /**
   * Getter numPortal
   * @return {number}
   */
  public getNumPortal(): number {
    return this._numPortal;
  }

  /**
   * Getter telefono
   * @return {number}
   */
  public getTelefono(): number {
    return this._telefono;
  }

  /**
   * Getter idNotes
   * @return {number}
   */
  public getIdNotes(): number {
    return this._idNotes;
  }

  /**
   * Getter visitado
   * @return {boolean}
   */
  public getVisitado(): boolean {
    return this._visitado;
  }

  /**
   * Getter via
   * @return {Vias}
   */
  public getVia(): Vias {
    return this._via;
  }

  /**
   * Setter idVia
   * @param {number} value
   */
  public setIdVia(value: string) {
    this._idVia = value;
  }

  /**
   * Setter nombre
   * @param {string} value
   */
  public setNombre(value: string) {
    this._nombre = value;
  }

  /**
   * Setter numPortal
   * @param {number} value
   */
  public setNumPortal(value: number) {
    this._numPortal = value;
  }

  /**
   * Setter telefono
   * @param {number} value
   */
  public setTelefono(value: number) {
    this._telefono = value;
  }

  /**
   * Setter idNotes
   * @param {number} value
   */
  public setIdNotes(value: number) {
    this._idNotes = value;
  }

  /**
   * Setter visitado
   * @param {boolean} value
   */
  public setVisitado(value: boolean) {
    this._visitado = value;
  }

  /**
   * Setter via
   * @param {Vias} value
   */
  public setVia(value: Vias) {
    this._via = value;
  }

  /**
   * Getter latitude
   * @return {number}
   */
  public get latitude(): number {
    return this._latitude;
  }

  /**
   * Setter latitude
   * @param {number} value
   */
  public set latitude(value: number) {
    this._latitude = value;
  }

  /**
   * Getter longitude
   * @return {number}
   */
  public get longitude(): number {
    return this._longitude;
  }

  /**
   * Setter longitude
   * @param {number} value
   */
  public set longitude(value: number) {
    this._longitude = value;
  }
}
