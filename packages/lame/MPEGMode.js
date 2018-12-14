export function MPEGMode(ordinal) {
    const _ordinal = ordinal;
    this.ordinal = () => _ordinal
}

MPEGMode.STEREO = new MPEGMode(0);
MPEGMode.JOINT_STEREO = new MPEGMode(1);
MPEGMode.DUAL_CHANNEL = new MPEGMode(2);
MPEGMode.MONO = new MPEGMode(3);
MPEGMode.NOT_SET = new MPEGMode(4);

export default MPEGMode;