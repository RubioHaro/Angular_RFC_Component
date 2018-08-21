
export function ValidadorRFC(c: string) {
    const RFC_Regexp = /^([A-ZÑ\x26]{3,4}([0-9]{2})(0[1-9]|1[0-2])(0[1-9]|1[0-9]|2[0-9]|3[0-1]))((-)?([A-Z\d]{3}))?$/;
    const RFC = c;
    return RFC_Regexp.test(RFC);
}
