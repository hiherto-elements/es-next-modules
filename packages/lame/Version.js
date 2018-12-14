export function Version() {

    /**
     * URL for the LAME website.
     */
    const LAME_URL = "http://www.mp3dev.org/";

    /**
     * Major version number.
     */
    const LAME_MAJOR_VERSION = 3;
    /**
     * Minor version number.
     */
    const LAME_MINOR_VERSION = 98;
    /**
     * Patch level.
     */
    const LAME_PATCH_VERSION = 4;

    /**
     * Major version number.
     */
    const PSY_MAJOR_VERSION = 0;
    /**
     * Minor version number.
     */
    const PSY_MINOR_VERSION = 93;

    /**
     * A string which describes the version of LAME.
     *
     * @return string which describes the version of LAME
     */
    this.getLameVersion = () => // primary to write screen reports
    `${LAME_MAJOR_VERSION}.${LAME_MINOR_VERSION}.${LAME_PATCH_VERSION}`

    /**
     * The short version of the LAME version string.
     *
     * @return short version of the LAME version string
     */
    this.getLameShortVersion = () => // Adding date and time to version string makes it harder for output
    // validation
    `${LAME_MAJOR_VERSION}.${LAME_MINOR_VERSION}.${LAME_PATCH_VERSION}`

    /**
     * The shortest version of the LAME version string.
     *
     * @return shortest version of the LAME version string
     */
    this.getLameVeryShortVersion = () => // Adding date and time to version string makes it harder for output
    `LAME${LAME_MAJOR_VERSION}.${LAME_MINOR_VERSION}r`

    /**
     * String which describes the version of GPSYCHO
     *
     * @return string which describes the version of GPSYCHO
     */
    this.getPsyVersion = () => `${PSY_MAJOR_VERSION}.${PSY_MINOR_VERSION}`

    /**
     * String which is a URL for the LAME website.
     *
     * @return string which is a URL for the LAME website
     */
    this.getLameUrl = () => LAME_URL

    /**
     * Quite useless for a java version, however we are compatible ;-)
     *
     * @return "32bits"
     */
    this.getLameOsBitness = () => "32bits"

}

export default Version;