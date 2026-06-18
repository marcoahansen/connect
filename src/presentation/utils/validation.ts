export const validateRequired = (value: string, label= "Este campo" ) : string |null => {
 return value.trim() ? null : `Informe ${label.toLowerCase()}`;
}