export default class AudioController {
    private gainNode: GainNode;
    private originalGain: number = 1;
    private isMuted: boolean = false;
    public onVolumeChanged:((vol: number)=>any)|null=null;

    constructor(audioContext: AudioContext) {
        this.gainNode = audioContext.createGain();
        this.gainNode.gain.value = this.originalGain;
    }

    get node(): GainNode {
        return this.gainNode;
    }

    toggleMute(): void {
        if (this.isMuted) {
            this.forceSetVolume(this.originalGain)
            this.isMuted=false;
        } else {
            this.originalGain = this.gainNode.gain.value;
            this.isMuted=true;
            this.forceSetVolume(0);
        }
        
    }

    setVolume(vol: number): void {
        this.originalGain = vol;
        if (!this.isMuted) {
            this.forceSetVolume(vol);
        }

    }

    private forceSetVolume(vol: number){
        this.gainNode.gain.value = vol;
        if(this.onVolumeChanged!==null){
            this.onVolumeChanged(vol);
        }
    }

    getVolume(): number {
        return this.originalGain;
    }

    isMutedNow(): boolean {
        return this.isMuted;
    }
}
