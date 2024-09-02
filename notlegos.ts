// NotLegos Blocks

//% block="Not LEGOs" color=#0031AF weight=1000 icon="\uf3a5"
//% groups=['MP3",'Display', 'Laser', 'others']
namespace notLegos {

    let mbAwaiting: string[] = []
    let mbIntro: string[] = []
    let mbLevel: string[] = []
    let mbLost: string[] = []
    let mbTutorial: string[] = []
    let mbWon: string[] = []
    let playlistAwaiting: string[] = []
    let playlistCorrect: string[] = []
    let playlistFailure: string[] = []
    let playlistHurry: string[] = []
    let playlistIncorrect: string[] = []
    let playlistIntro: string[] = []
    let playlistLevel: string[] = []
    let playlistLost: string[] = []
    let playlistName: string[] = []
    let playlistNay: string[] = []
    let playlistOuch: string[] = []
    let playlistSuccess: string[] = []
    let playlistReady: string[] = []
    let playlistTutorial: string[] = []
    let playlistWon: string[] = []
    let playlistWonMusic: string[] = []
    let playlistYay: string[] = []
    let sbCorrect: string[] = []
    let sbDoom: string[] = []
    let sbFailure: string[] = []
    let sbHurry: string[] = []
    let sbIncorrect: string[] = []
    let sbIntro: string[] = []
    let sbLost: string[] = []
    let sbName: string[] = []
    let sbNay: string[] = []
    let sbOuch: string[] = []
    let sbReady: string[] = []
    let sbSFX: string[] = []
    let sbSuccess: string[] = []
    let sbVoices: string[] = []
    let sbWon: string[] = []
    let sbYay: string[] = []
    let stringParts: string[] = []
    let thePlayer = "default"
    let theSound = ""
    let soundString = ""
    let thisLetter = ""
    let musicString = ""
    let isPot = false
    let potPin = AnalogPin.P0
    let mp3bits = 0
    let mp3Apin = SerialPin.P0
    let mp3Bpin = SerialPin.P0
    let mp3Cpin = SerialPin.P0
    let mp3Avolume = 1
    let mp3Bvolume = 1
    let mp3Cvolume = 1
    let lastMP3bit = ""

    /*
    * Retrieve the Player's Music String
    */
    //% blockId=notlegos_music_soundstring
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=101
    //% block="Retrieve music string for $player"
    export function playerMusicString(player: string) {
        let musicString = ""
        if (player == "Mario") {
            let ms0 = "V_10_1_90_1.75|V_10_2_90_3.65|V_10_3_90_11.5|V_10_4_90_0|V_10_5_90_0|V_10_6_90_4.65|V_10_7_90_7.15|V_10_8_90_4.8|V_10_9_90_3.75|V_10_10_90_5.05|V_10_11_90_0|V_10_12_90_0|V_10_13_90_3|V_10_14_90_3|V_10_15_90_3|V_10_16_90_4|V_10_17_90_0|V_10_18_90_3|V_10_19_90_3|V_10_20_90_4|V_10_21_90_2|V_10_22_90_0|V_10_23_90_2|V_10_24_90_2|V_10_25_90_6|V_10_26_90_6|V_10_27_90_6|V_10_28_90_6|V_10_29_90_6|V_10_30_90_6|V_10_31_90_6|V_10_32_90_6|V_10_33_90_8|V_10_34_90_9|V_10_35_90_6|V_10_36_90_6|V_10_37_90_6|V_10_38_90_6|V_10_39_90_6|V_10_40_90_6"
            let ms1 = "N_1_1_75_3|N_1_2_75_4|N_1_3_75_8|N_1_4_75_5|N_1_5_75_4|N_1_6_75_12|N_1_7_75_3|N_1_8_75_7|N_1_9_75_6|N_1_10_75_7|N_1_11_75_9|N_1_12_75_9|N_1_13_75_11|N_1_14_75_3|N_1_15_75_10|N_1_16_75_3|N_1_17_75_6|N_1_18_75_5|N_1_19_75_6|N_1_20_75_5|N_1_21_75_7|N_1_22_75_5|N_1_23_75_3|N_1_24_75_7|N_1_25_75_6|N_1_26_75_5|N_1_27_75_11|N_1_28_75_5|N_1_29_75_5|N_1_30_75_4|N_1_31_75_6|N_1_32_75_4|N_1_33_75_4|N_1_34_75_10|N_1_35_75_8|N_1_36_75_8|N_1_37_75_3|N_1_38_75_7|N_1_39_75_4|N_1_40_75_6|N_1_41_75_3|N_1_42_75_7|N_1_43_75_7|N_1_44_75_3|N_1_45_75_6|N_1_46_75_1|N_1_47_75_2|N_1_48_75_2|N_1_49_75_8|N_1_50_75_16|N_1_51_75_9|N_1_52_75_10|N_1_53_75_13|N_1_54_75_14|N_1_55_75_14|N_1_56_75_16|N_1_57_75_7|N_1_58_75_4|N_1_59_75_9|N_1_60_75_8|N_1_61_75_9|N_1_62_75_9|N_1_63_75_12|N_1_64_75_4|N_1_65_75_6|N_1_66_75_9|N_1_67_75_5|N_1_68_75_6|N_1_69_75_5|N_1_70_75_10|N_1_71_75_8|N_1_72_75_8|N_1_73_75_5|N_1_74_75_3"
            let ms2 = "T_2_1_65_36|T_2_2_65_40|T_2_3_65_41|T_2_4_65_46|T_2_5_65_50|T_2_6_65_51|T_2_7_65_59|T_2_8_65_63|T_2_9_65_64|T_2_10_65_65|T_2_11_65_66|T_2_12_65_67|T_2_13_65_68|T_2_14_65_69|T_2_15_65_76|T_2_16_65_80|T_2_17_65_84|T_2_18_65_90|T_2_19_65_92|T_2_20_65_100|T_2_21_65_103|T_2_22_65_105|T_2_23_65_112|T_2_24_65_113|T_2_25_65_123|T_2_26_65_138|T_2_27_65_142|T_2_28_65_144|T_2_29_65_156|T_2_30_65_158|T_2_31_65_120|T_2_32_65_120|T_2_33_65_120|T_2_34_65_120|T_2_35_65_120|T_2_36_65_120"
            let ms3 = "A_3_1_100_64|A_3_2_100_211|A_3_3_100_185|A_3_4_100_185|A_3_5_100_182|A_3_6_100_114|A_3_7_100_181|A_3_8_100_103|A_3_9_100_303|A_3_10_100_21|A_3_11_100_235|A_3_12_100_121|A_3_13_100_203|A_3_14_100_119|A_3_15_100_206|A_3_16_100_146|A_3_17_100_237|A_3_18_100_210|A_3_19_100_160"
            let ms4 = "E_4_1_100_128|E_4_3_100_142|E_4_5_100_111|E_4_6_100_141|E_4_9_100_126|E_4_11_100_132|E_4_15_100_119|E_4_16_100_146|E_4_18_100_120|E_4_20_100_143|E_4_22_100_142|E_4_23_100_112|E_4_24_100_138|E_4_25_100_139|E_4_26_100_111|E_4_27_100_116|E_4_28_100_129|E_4_31_100_98|E_4_32_100_146|E_4_33_100_177|E_4_34_100_82|E_4_36_100_160|E_4_38_100_180|E_4_39_100_211|E_4_41_100_134|E_4_42_100_183|E_4_43_100_124|E_4_44_100_261|E_4_45_100_91|E_4_46_100_138|E_4_49_100_207|E_4_50_100_41|E_4_51_100_180|E_4_52_100_202|E_4_53_100_194|E_4_56_100_209|E_4_57_100_195|E_4_58_100_180|E_4_60_100_198|E_4_61_100_180|E_4_63_100_78|E_4_66_100_139|E_4_67_100_224|E_4_68_100_180|E_4_73_100_180|E_4_76_100_180|E_4_77_100_196|E_4_78_100_113|E_4_82_100_180|E_4_83_100_123|E_4_84_100_180|E_4_86_100_126|E_4_93_100_121|E_4_97_100_59|E_4_98_100_180|E_4_99_100_180|E_4_100_100_118|E_4_101_100_156|E_4_102_100_180|E_4_103_100_70|E_4_104_100_216|E_4_105_100_140|E_4_106_100_180|E_4_107_100_147|E_4_108_100_147|E_4_109_100_180|E_4_110_100_158|E_4_111_100_180|E_4_112_100_80|E_4_113_100_152|E_4_114_100_127|E_4_116_100_122|E_4_118_100_106|E_4_123_100_143|E_4_124_100_36|E_4_125_100_164|E_4_127_100_282|E_4_128_100_311|E_4_129_100_123|E_4_130_100_187|E_4_131_100_62|E_4_132_100_180|E_4_133_100_130|E_4_134_100_112|E_4_135_100_105|E_4_139_100_126|E_4_141_100_176|E_4_142_100_135|E_4_143_100_126|E_4_144_100_144|E_4_145_100_140|E_4_146_100_133|E_4_149_100_167|E_4_150_100_120|E_4_151_100_180|E_4_155_100_226|E_4_157_100_164|E_4_158_100_144|E_4_159_100_104|E_4_161_100_180|E_4_162_100_87|E_4_163_100_126|E_4_164_100_118|E_4_165_100_194|E_4_166_100_135|E_4_167_100_50|E_4_168_100_109|E_4_169_100_180|E_4_170_100_133|E_4_171_100_180|E_4_172_100_91|E_4_173_100_138|E_4_176_100_120|E_4_177_100_81|E_4_178_100_150|E_4_179_100_153|E_4_180_100_104|E_4_181_100_112"
            let ms5 = "O_5_1_100_4|O_5_2_100_17|O_5_3_100_29|O_5_4_100_172|O_5_5_100_13|O_5_6_100_248|O_5_7_100_11|O_5_8_100_445|O_5_9_100_241|O_5_10_100_244|O_5_11_100_20|O_5_12_100_7|O_5_13_100_28|O_5_14_100_74|O_5_15_100_15|O_5_16_100_74|O_5_17_100_17|O_5_18_100_17|O_5_19_100_15|O_5_20_100_38|O_5_21_100_42|O_5_22_100_67|O_5_23_100_8|O_5_24_100_8|O_5_25_100_13|O_5_26_100_17|O_5_27_100_5|O_5_28_100_122|O_5_29_100_226|O_5_30_100_79"
            let ms6 = "L_6_1_100_87|L_6_2_100_31|L_6_3_100_196|L_6_4_100_65|L_6_5_100_4|L_6_6_100_23|L_6_7_100_65|L_6_8_100_62|L_6_9_100_78|L_6_10_100_6|L_6_11_100_162"
            let ms7 = "C_7_1_100_4|C_7_2_100_8|C_7_3_100_8|C_7_4_100_6|C_7_5_100_10|C_7_6_100_8|C_7_7_100_6|C_7_8_100_4|C_7_9_100_17|C_7_10_100_9|C_7_11_100_4|C_7_12_100_8|C_7_13_100_12|C_7_14_100_7|C_7_15_100_10|C_7_16_100_9|C_7_17_100_10|C_7_18_100_9|C_7_19_100_8|C_7_20_100_4|C_7_21_100_7|C_7_22_100_26|C_7_23_100_5|C_7_24_100_4|C_7_25_100_10|C_7_26_100_7|C_7_27_100_7|C_7_28_100_6|C_7_29_100_7|C_7_30_100_7|C_7_31_100_12|C_7_32_100_4|C_7_33_100_6|C_7_34_100_6|C_7_35_100_6|C_7_36_100_6|C_7_37_100_5|C_7_38_100_3|C_7_39_100_6|C_7_40_100_6|C_7_41_100_6|C_7_42_100_8|C_7_43_100_6|C_7_44_100_8|C_7_45_100_6|C_7_46_100_5|C_7_47_100_5|C_7_48_100_12|C_7_49_100_3|C_7_50_100_7|C_7_51_100_8|C_7_52_100_11|C_7_53_100_6|C_7_54_100_2|C_7_55_100_5|C_7_56_100_7|C_7_57_100_8|C_7_58_100_7|C_7_59_100_6|C_7_60_100_7|C_7_61_100_6|C_7_62_100_8|C_7_63_100_5|C_7_64_100_5|C_7_65_100_7|C_7_66_100_9|C_7_67_100_6|C_7_68_100_6|C_7_69_100_7|C_7_70_100_10|C_7_71_100_7|C_7_72_100_5|C_7_73_100_6|C_7_74_100_8|C_7_75_100_3|C_7_76_100_3|C_7_77_100_6|C_7_78_100_7|C_7_79_100_4|C_7_80_100_6|C_7_81_100_2|C_7_82_100_3|C_7_83_100_3|C_7_84_100_1|C_7_85_100_3|C_7_86_100_6|C_7_87_100_7|C_7_88_100_5|C_7_89_100_3|C_7_90_100_5|C_7_91_100_3|C_7_92_100_3|C_7_93_100_2|C_7_94_100_3|C_7_95_100_3|C_7_96_100_1|C_7_99_100_1|C_7_100_100_1|C_7_101_100_1|C_7_102_100_1|C_7_103_100_1|C_7_104_100_3|C_7_105_100_1|C_7_106_100_1|C_7_107_100_4|C_7_108_100_4|C_7_109_100_1|C_7_110_100_1|C_7_111_100_1|C_7_112_100_1|C_7_113_100_1|C_7_114_100_2|C_7_115_100_1|C_7_116_100_1|C_7_117_100_1|C_7_118_100_1"
            let ms8 = "I_8_1_100_6|I_8_2_100_5|I_8_3_100_3|I_8_4_100_5|I_8_5_100_7|I_8_6_100_6|I_8_7_100_4|I_8_8_100_1|I_8_9_100_3|I_8_10_100_4|I_8_11_100_3|I_8_12_100_3|I_8_13_100_6|I_8_14_100_3|I_8_15_100_1|I_8_16_100_1|I_8_17_100_1|I_8_18_100_1|I_8_19_100_0|I_8_20_100_0|I_8_21_100_5|I_8_22_100_4|I_8_23_100_3|I_8_24_100_7"
            let ms9 = "D_9_1_85_4.754|D_9_2_85_4.336|D_9_3_85_5.172|D_9_4_85_4.806|D_9_5_85_2.3|D_9_6_85_1.536|D_9_7_85_2|D_9_8_85_2|D_9_9_85_3|D_9_10_85_1.2|D_9_11_85_1|D_9_12_85_0|D_9_13_85_1|D_9_14_85_2|D_9_15_85_2.092|D_9_16_85_1.404|D_9_17_85_1.58|D_9_18_85_1.412|D_9_19_85_0|D_9_20_85_1|D_9_21_85_1|D_9_22_85_1|D_9_23_85_1|D_9_24_85_1|D_9_25_85_1.7|D_9_26_85_2.1|D_9_27_85_1.864|D_9_28_85_0.8|D_9_29_85_0|D_9_30_85_2|D_9_31_85_1|D_9_32_85_0.8|D_9_33_85_2.552|D_9_34_85_2.1|D_9_35_85_2|D_9_36_85_1|D_9_37_85_1|D_9_38_85_1|D_9_39_85_0|D_9_40_85_1|D_9_41_85_0|D_9_42_85_0|D_9_43_85_1|D_9_44_85_0|D_9_45_85_0|D_9_46_85_0.624|D_9_47_85_1|D_9_48_85_1|D_9_49_85_1|D_9_50_85_1|D_9_51_100_0.756|D_9_53_85_5.256|D_9_54_85_2|D_9_55_85_5|D_9_56_85_2|D_9_57_85_2|D_9_58_85_0|D_9_59_85_1.2|D_9_60_85_1|D_9_61_85_0|D_9_62_85_1.632|D_9_63_85_0.8|D_9_64_85_0.8|D_9_65_85_0.8|D_9_66_85_0.8|D_9_67_85_0.8|D_9_68_85_1|D_9_69_85_1.2|D_9_70_85_1|D_9_71_85_1|D_9_72_85_1|D_9_73_85_2|D_9_74_85_1|D_9_75_85_1.5|D_9_76_85_1|D_9_77_85_1|D_9_78_85_0.7|D_9_79_85_1.076|D_9_80_85_1|D_9_81_85_1|D_9_82_85_2|D_9_83_85_1.144|D_9_84_85_1.1|D_9_85_85_1.8|D_9_86_85_1.85|D_9_87_85_1.32|D_9_88_85_0|D_9_89_85_0.8|D_9_90_85_1|D_9_91_85_2|D_9_92_85_2|D_9_93_85_2|D_9_94_85_1|D_9_95_85_2|D_9_96_85_6|D_9_97_85_0|D_9_98_85_2.264|D_9_99_85_1|D_9_100_85_1|D_9_101_85_2.176|D_9_102_85_0|D_9_103_85_0|D_9_104_85_1|D_9_105_85_1|D_9_106_85_2.14|D_9_107_85_3.984|D_9_108_85_1.908|D_9_109_85_3.528|D_9_110_85_0|D_9_111_85_1|D_9_112_85_2.2|D_9_113_85_2"
            musicString = ms0 + "|" + ms1 + "|" + ms2 + "|" + ms3 + "|" + ms4 + "|" + ms5 + "|" + ms6 + "|" + ms7 + "|" + ms8 + "|" + ms9
        }
        return musicString
    }



    //% blockId="playLength" 
    //% block="playsFor playString:$soundString with volumeFactor:$potReading using pin:$Rjpin"
    //% soundString.defl="1_1_25_100" thePot.defl=".25"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function playsForLegacy(soundString: string, potReading: number, Rjpin: DigitalRJPin): number {
        if (lastPort != Rjpin) {
            let pin = RJpin_to_Serial(Rjpin)
            serial.redirect(
                pin,
                SerialPin.USB_RX,
                BaudRate.BaudRate9600
            )
            lastPort = Rjpin
        }

        stringParts = soundString.split("_")
        let theFolder = stringParts[0]
        let theFile = stringParts[1]
        let theVolume = stringParts[2]
        let theLength = stringParts[3]
        let volumeFactor = Math.round(pins.map(parseFloat(theVolume) * potReading, 0, 100, 0, 30))
        if (volumeFactor > 30) {
            volumeFactor = 30
        }

        CMD = 6
        para1 = 0
        para2 = volumeFactor
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
        basic.pause(50)

        CMD = 15
        para1 = parseInt(theFolder)
        para2 = parseInt(theFile)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()

        return parseFloat(theLength) * 1000 + 800
    }

    //% blockId="volumePort" 
    //% block="set MP3 volume:$theVolume usingPin:$Rjpin"
    //% theVolume.defl="10"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function volumePort(theVolume: string, Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        let volume = parseInt(theVolume)
        if (volume > 30) {
            volume = 30
        }
        CMD = 6
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
        basic.pause(50)
    }


    //% blockId="volumeQuickPort" 
    //% block="quickly set MP3 volume:$theVolume using Pin:$Rjpin"
    //% theVolume.defl="10"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function volumeQuickPort(theVolume: string, Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        let volume = parseInt(theVolume)
        if (volume > 30) {
            volume = 30
        }
        CMD = 6
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
    }

    /*
      * Get a SFX
      */
    //% blockId=nl_sfx_get
    //% subcategory="MP3" group="MP3" color=#EA5532
    //% weight=101
    //% block="Fetch SFX track $track"
    export function playSFX(track: number) {
        let thisTrack = 0
        let thisString = ""
        for (let value of sbDoom) {
            thisTrack = parseFloat(value.split("_")[1])
            if (thisTrack == track) {
                thisString = value
                break;
            }
        }
        return thisString
    }


    function shuffleList(listIn: string[]) {
        let listCopy = []
        for (let value2 of listIn) {
            listCopy.push(value2)
        }
        let listOut = ["temp"]
        while (listCopy.length > 0) {
            let thisItem = listCopy._pickRandom()
            listOut.push(thisItem)
            listCopy.removeAt(listCopy.indexOf(thisItem))
        }
        listOut.shift()
        return listOut
    }

    /*
    * Get a Voice
    */
    //% blockId=nl_voice_get
    //% subcategory="MP3" group="MP3" color=#EA5532
    //% weight=101
    //% block="Fetch Voice track $track"
    export function playVoice(track: number) {
        let thisString = ""
        for (let value3 of sbVoices) {
            let thisTrack = parseFloat(value3.split("_")[1])
            if (thisTrack == track) {
                thisString = value3
                break;
            }
        }
        return thisString
    }

    /*
      * Set the Player
      */
    //% blockId=nl_player_set
    //% subcategory="MP3" group="MP3" color=#EA5532
    //% weight=101
    //% block="Set player to $player"

    export function setPlayer(player: string): void {
        thePlayer = player
        setSounds(thePlayer)
        setMusic(thePlayer)
    }

    /*
      * Retrieve the Player
      */
    //% blockId=nl_player_get
    //% subcategory="MP3" group="MP3" color=#EA5532
    //% weight=101
    //% block="Retrieve player"
    export function getPlayer() {
        return thePlayer
    }

    /*
      * Get a sound
      */
    //% blockId=nl_sound_get
    //% subcategory="MP3" group="MP3" color=#EA5532
    //% weight=101
    //% block="Fetch sound for $category"
    export function playSound(category: string) {
        if (category == "Name") {
            if (playlistName.length == 0) {
                playlistName = shuffleList(sbName)
            }
            theSound = playlistName.shift()
        } else if (category == "Ready") {
            if (playlistReady.length == 0) {
                playlistReady = shuffleList(sbReady)
            }
            theSound = playlistReady.shift()
        } else if (category == "Yay") {
            if (playlistYay.length == 0) {
                playlistYay = shuffleList(sbYay)
            }
            theSound = playlistYay.shift()
        } else if (category == "Nay") {
            if (playlistNay.length == 0) {
                playlistNay = shuffleList(sbNay)
            }
            theSound = playlistNay.shift()
        } else if (category == "Ouch") {
            if (playlistOuch.length == 0) {
                playlistOuch = shuffleList(sbOuch)
            }
            theSound = playlistOuch.shift()
        } else if (category == "Success") {
            if (playlistSuccess.length == 0) {
                playlistSuccess = shuffleList(sbSuccess)
            }
            theSound = playlistSuccess.shift()
        } else if (category == "Failure") {
            if (playlistFailure.length == 0) {
                playlistFailure = shuffleList(sbFailure)
            }
            theSound = playlistFailure.shift()
        } else if (category == "Won") {
            if (playlistWon.length == 0) {
                playlistWon = shuffleList(sbWon)
            }
            theSound = playlistWon.shift()
        } else if (category == "Lost") {
            if (playlistLost.length == 0) {
                playlistLost = shuffleList(sbLost)
            }
            theSound = playlistLost.shift()
        } else if (category == "Hurry") {
            if (playlistHurry.length == 0) {
                playlistHurry = shuffleList(sbHurry)
            }
            theSound = playlistHurry.shift()
        } else if (category == "Correct") {
            if (playlistCorrect.length == 0) {
                playlistCorrect = shuffleList(sbCorrect)
            }
            theSound = playlistCorrect.shift()
        } else if (category == "Incorrect") {
            if (playlistIncorrect.length == 0) {
                playlistIncorrect = shuffleList(sbIncorrect)
            }
            theSound = playlistIncorrect.shift()
        }
        return theSound
    }

    /*
      * Get music
      */
    //% blockId=nl_music_get
    //% subcategory="MP3" group="MP3" color=#EA5532
    //% weight=101
    //% block="Fetch music for $genre"

    export function playMusic(genre: string) {
        if (genre == "Tutorial") {
            if (playlistTutorial.length == 0) {
                playlistTutorial = shuffleList(mbTutorial)
            }
            theSound = playlistTutorial.shift()
        } else if (genre == "Intro") {
            if (playlistIntro.length == 0) {
                playlistIntro = shuffleList(mbIntro)
            }
            theSound = playlistIntro.shift()
        } else if (genre == "Awaiting") {
            if (playlistAwaiting.length == 0) {
                playlistAwaiting = shuffleList(mbAwaiting)
            }
            theSound = playlistAwaiting.shift()
        } else if (genre == "Level") {
            if (playlistLevel.length == 0) {
                playlistLevel = shuffleList(mbLevel)
            }
            theSound = playlistLevel.shift()
        } else if (genre == "Won") {
            if (playlistWonMusic.length == 0) {
                playlistWonMusic = shuffleList(mbWon)
            }
            theSound = playlistWonMusic.shift()
        } else if (genre == "Lost") {
            let playlistLostMusic: number[] = []
            if (playlistLostMusic.length == 0) {
                playlistLost = shuffleList(mbLost)
            }
            theSound = playlistLost.shift()
        }
        return theSound
    }

    function setSounds(player: string) {
        soundString = playerSoundString(player)
        sbName = []
        sbReady = []
        sbYay = []
        sbIntro = []
        sbNay = []
        sbOuch = []
        sbSuccess = []
        sbFailure = []
        sbWon = []
        sbLost = []
        sbHurry = []
        stringParts = soundString.split("|")
        for (let value22 of stringParts) {
            thisLetter = value22.charAt(0)
            theSound = value22.substr(2, value22.length - 2)
            if (thisLetter == "A") {
                sbName.push(theSound)
            } else if (thisLetter == "R") {
                sbReady.push(theSound)
            } else if (thisLetter == "Y") {
                sbYay.push(theSound)
            } else if (thisLetter == "I") {
                sbIntro.push(theSound)
            } else if (thisLetter == "N") {
                sbNay.push(theSound)
            } else if (thisLetter == "O") {
                sbOuch.push(theSound)
            } else if (thisLetter == "S") {
                sbSuccess.push(theSound)
            } else if (thisLetter == "F") {
                sbFailure.push(theSound)
            } else if (thisLetter == "W") {
                sbWon.push(theSound)
            } else if (thisLetter == "L") {
                sbLost.push(theSound)
            } else if (thisLetter == "H") {
                sbHurry.push(theSound)
            }
        }
    }

    function setMusic(player: string) {
        musicString = notLegos.playerMusicString("Mario")
        mbTutorial = []
        mbIntro = []
        sbVoices = []
        mbAwaiting = []
        mbLevel = []
        mbWon = []
        mbLost = []
        sbCorrect = []
        sbIncorrect = []
        sbDoom = []
        sbSFX = []
        stringParts = musicString.split("|")
        for (let value32 of stringParts) {
            thisLetter = value32.charAt(0)
            theSound = value32.substr(2, value32.length - 2)
            if (thisLetter == "T") {
                mbTutorial.push(theSound)
            } else if (thisLetter == "N") {
                mbIntro.push(theSound)
            } else if (thisLetter == "V") {
                sbVoices.push(theSound)
            } else if (thisLetter == "A") {
                mbAwaiting.push(theSound)
            } else if (thisLetter == "E") {
                mbLevel.push(theSound)
            } else if (thisLetter == "O") {
                mbWon.push(theSound)
            } else if (thisLetter == "L") {
                mbLost.push(theSound)
            } else if (thisLetter == "C") {
                sbCorrect.push(theSound)
            } else if (thisLetter == "I") {
                sbIncorrect.push(theSound)
            } else if (thisLetter == "D") {
                sbDoom.push(theSound)
            } else if (thisLetter == "S") {
                sbSFX.push(theSound)
            }
        }
    }

    /*
      * Retrieve the Player's Sound String
      */
    //% blockId=notlegos_player_soundstring
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=101
    //% block="Retrieve sound string for $player"
    export function playerSoundString(player: string) {
        let soundString = ""
        if (player == "Mario") {
            soundString = "A_21_1_100_1.5|A_21_2_100_1|I_21_3_100_3.3|A_21_4_100_1.9|A_21_5_100_2.1|I_21_6_100_1.8|I_21_7_100_1.8|R_21_8_100_0.6|R_21_9_100_1.3|R_21_10_100_1.1|R_21_11_100_0.6|R_21_12_100_0.8|R_21_13_100_1.6|R_21_14_100_1.3|R_21_15_100_1.2|R_21_16_100_1.1|R_21_17_100_1.3|R_21_18_100_1|Y_21_19_100_0.2|Y_21_20_100_0.2|Y_21_21_100_0.3|Y_21_22_100_0.5|Y_21_23_100_0.6|Y_21_24_100_0.6|Y_21_25_100_0.6|Y_21_26_100_0.6|Y_21_27_100_0.6|Y_21_28_100_0.6|Y_21_29_100_0.7|Y_21_30_100_0.7|Y_21_31_100_0.7|Y_21_32_100_0.7|Y_21_33_100_0.7|Y_21_34_100_0.8|Y_21_35_100_0.8|Y_21_36_100_0.8|Y_21_37_100_0.8|Y_21_38_100_0.8|Y_21_39_100_0.8|Y_21_40_100_0.9|Y_21_41_100_0.9|Y_21_42_100_0.9|Y_21_43_100_0.9|Y_21_44_100_0.9|Y_21_45_100_0.9|Y_21_46_100_0.9|Y_21_47_100_1|Y_21_48_100_1|Y_21_49_100_1|Y_21_50_100_1|Y_21_51_100_1.1|Y_21_52_100_1.1|Y_21_53_100_1.1|Y_21_54_100_1.2|Y_21_55_100_1.2|Y_21_56_100_1.2|Y_21_57_100_1.2|Y_21_58_100_1.3|Y_21_59_100_1.3|Y_21_60_100_1.3|Y_21_61_100_1.4|Y_21_62_100_1.4|S_21_63_100_1|S_21_64_100_1.6|S_21_65_100_1.7|S_21_66_100_1.7|S_21_67_100_1.9|S_21_68_100_2.1|S_21_69_100_2.2|S_21_70_100_2.4|S_21_71_100_2.4|S_21_72_100_2.5|W_21_73_100_1.8|W_21_74_100_2|W_21_75_100_2.2|W_21_76_100_2.6|W_21_77_100_2.9|O_21_78_100_0.6|O_21_79_100_0.4|O_21_80_100_0.4|O_21_81_100_1.1|O_21_82_100_1.5|O_21_83_100_0.8|O_21_84_100_0.7|O_21_85_100_0.8|O_21_86_100_0.9|O_21_87_100_1.3|O_21_88_100_0.5|O_21_89_100_1|O_21_90_100_1|O_21_91_100_0.4|O_21_92_100_0.5|O_21_93_100_0.9|O_21_94_100_0.4|O_21_95_100_0.4|N_21_96_100_1|N_21_97_100_1.1|N_21_98_100_1|N_21_99_100_0.6|N_21_100_100_0.9|N_21_101_100_1.4|N_21_102_100_1.7|N_21_103_100_1.3|N_21_104_100_0.6|N_21_105_100_1.4|N_21_106_100_0.8|N_21_107_100_1.1|N_21_108_100_1.1|N_21_109_100_0.8|N_21_110_100_1.7|N_21_111_100_2.4|I_21_112_100_0.8|I_21_113_100_0.9|F_21_114_100_1.1|F_21_115_100_2.5|F_21_116_100_2.5|F_21_117_100_1.4|L_21_118_100_3.4|L_21_119_100_3.5|L_21_120_100_4.4|L_21_121_100_1.5|H_21_122_100_44.4"
        }
        return soundString
    }


    ///////////////////////////////////////////////////////MP3
    let Start_Byte = 0x7E
    let Version_Byte = 0xFF
    let Command_Length = 0x06
    let End_Byte = 0xEF
    let Acknowledge = 0x00
    let CMD = 0x00
    let para1 = 0x00
    let para2 = 0x00
    let highByte = 0x00
    let lowByte = 0x00
    let dataArr: number[] = [Start_Byte, Version_Byte, Command_Length, CMD, Acknowledge, para1, para2, highByte, lowByte, End_Byte]
    /*
    * Play status selection button list
    */

    function mp3_sendData(): void {
        let myBuff = pins.createBuffer(10);
        for (let i = 0; i < 10; i++) {
            myBuff.setNumber(NumberFormat.UInt8BE, i, dataArr[i])
        }
        serial.writeBuffer(myBuff)
        basic.pause(100)
    }
    function mp3_checkSum(): void {
        let total = 0;
        for (let i = 1; i < 7; i++) {
            total += dataArr[i]
        }
        total = 65536 - total
        lowByte = total & 0xFF;
        highByte = total >> 8;
        dataArr[7] = highByte
        dataArr[8] = lowByte
    }

    //% blockId="setLoopFolder" block="loop play all the MP3s in the folder:$folderNum"
    //% folderNum.defl="01"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function setLoopFolder(folderNum: string): void {
        CMD = 0x17
        para1 = 0
        para2 = parseInt(folderNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }

    //% blockId="folderPlay" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum || repeatList: $myAns"
    //% folderNum.defl="01" fileNum.defl="001"
    //% myAns.shadow="toggleYesNo"
    //% expandableArgumentMode="toggle"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function folderPlay(folderNum: string, fileNum: string, myAns: boolean = false): void {
        CMD = 0x0F
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
        if (myAns)
            execute(0x19)
    }

    //% blockId="playFolderFilePort" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum usingPin:$Rjpin"
    //% fileNum.defl="01" folderNum.defl="01"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function playFolderFilePort(folderNum: string, fileNum: string, Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)


        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        CMD = 15
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
    }

    //% blockId="playFolderFileVolumePort" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum with volume:$theVolume usingPin:$Rjpin"
    //% fileNum.defl="01" theVolume.defl="10" folderNum.defl="01"
    //% Rjpin.fieldEditor="gridpicker"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function playFolderFileVolumePort(folderNum: string, fileNum: string, theVolume: string, Rjpin: DigitalRJPin): void {

        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )

        let volume = parseInt(theVolume)
        if (volume > 25) {
            volume = 25
        }
        CMD = 6
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
        basic.pause(200)

        CMD = 15
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
    }




    function mp3_sendDataFast(): void {
        let myBuff = pins.createBuffer(10);
        for (let i = 0; i < 10; i++) {
            myBuff.setNumber(NumberFormat.UInt8BE, i, dataArr[i])
        }
        serial.writeBuffer(myBuff)
    }


    //% blockId="setTracking" 
    //% block="play the mp3 in order of:%tracking || repeatList: $myAns"
    //% myAns.shadow="toggleYesNo"
    //% tracking.defl=1
    //% expandableArgumentMode="toggle"
    //% subcategory=Excute group="MP3" color=#EA5532
    export function setTracking(tracking: number, myAns: boolean = false): void {
        CMD = 0x03
        para1 = 0x00
        para2 = tracking
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
        execute(0x0D)
        if (myAns)
            execute(0x19)
    }
    //% blockId=MP3execute block="Set MP3 execute procedure:%myType"
    //% myType.fieldEditor="gridpicker"
    //% myType.fieldOptions.columns=2
    //% subcategory=Excute group="MP3" color=#EA5532
    export function execute(myType: playType): void {
        CMD = myType
        para1 = 0x00
        para2 = 0x00
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }
    //% blockId="setVolume" block="Set volume(0~25):%volume"
    //% volume.min=0 volume.max=25
    //% subcategory=Excute group="MP3" color=#EA5532
    export function setVolume(volume: number): void {
        if (volume > 25) {
            volume = 25
        }
        CMD = 0x06
        para1 = 0
        para2 = volume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }
    //% blockId=MP3setPort block="Set the MP3 port to %Rjpin"
    //% Rjpin.fieldEditor="gridpicker"
    //% Rjpin.fieldOptions.columns=2
    //% subcategory=Excute group="MP3" color=#EA5532
    export function MP3SetPort(Rjpin: DigitalRJPin): void {
        let pin = RJpin_to_Serial(Rjpin)
        serial.redirect(
            pin,
            SerialPin.USB_RX,
            BaudRate.BaudRate9600
        )
        setVolume(25)
    }

    /*
     * Toggle a Laser (or somesuch)
     */
    //% blockId=notlegos_laser_toggle
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=100
    //% block="Laser %Rjpin toggle $laserState with brightness %laserBrightness"
    //% Rjpin.fieldEditor="gridpicker" 
    //% Rjpin.fieldOptions.columns=2
    //% laserBrightness.min=0 laserBrightness.max=1023
    //% laserState.shadow="toggleOnOff"
    export function laserToggle(Rjpin: DigitalRJPin, laserState: boolean, laserBrightness: number = 1023): void {
        let pin = AnalogPin.P1
        pin = RJpin_to_digital(Rjpin)
        if (laserState) {
            pins.analogWritePin(pin, laserBrightness)
        }
        else {
            pins.analogWritePin(pin, 0)
        }
    }

    /*
     * Pulse a Laser (or somesuch)
     */
    //% blockId=notlegos_laser_pulse
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=99
    //% block="Laser %Rjpin pulse for %pulseDuration milliseconds with brightness %laserBrightness"
    //% Rjpin.fieldEditor="gridpicker" 
    //% Rjpin.fieldOptions.columns=2
    //% laserBrightness.min=0 begBrightness.max=1023
    //% pulseDuration.min=100 pulseDuration.max=10000
    //% inlineInputMode=inline
    export function laserPulse(Rjpin: DigitalRJPin, pulseDuration: number = 500, laserBrightness: number = 1023): void {
        let pin = AnalogPin.P1
        pin = RJpin_to_digital(Rjpin)
        pins.analogWritePin(pin, laserBrightness)
        basic.pause(pulseDuration - 3)
        pins.analogWritePin(pin, 0)
    }


    /*
     * Fade a Laser (or somesuch)
     */
    //% blockId=notlegos_laser_fade
    //% subcategory="Laser" group="Laser" color=#EA5532
    //% weight=98
    //% block="Laser %Rjpin fade over %pulseDuration milliseconds from brightness %begBrightness to brightness %endBrightness"
    //% Rjpin.fieldEditor="gridpicker" 
    //% Rjpin.fieldOptions.columns=2
    //% begBrightness.min=0 begBrightness.max=1023
    //% endBrightness.min=0 endBrightness.max=1023
    //% pulseDuration.min=100 pulseDuration.max=10000
    //% expandableArgumentMode="toggle"
    //% inlineInputMode=inline
    export function laserFade(Rjpin: DigitalRJPin, pulseDuration: number = 500, begBrightness: number = 0, endBrightness: number = 1023): void {
        let pin = AnalogPin.P1
        pin = RJpin_to_digital(Rjpin)
        let analogStep = 0
        let laserLevel = 0
        let pulseHold = 10
        let stepCount = Math.floor((pulseDuration - 10) / (pulseHold + 2))
        if (begBrightness == endBrightness) {
            laserLevel = begBrightness
            pins.analogWritePin(pin, laserLevel)
            basic.pause(pulseDuration)
        } else if (begBrightness <= endBrightness) {
            analogStep = (endBrightness - begBrightness) / stepCount
            laserLevel = begBrightness
            while (laserLevel <= endBrightness) {
                pins.analogWritePin(pin, laserLevel)
                laserLevel = laserLevel + analogStep
                basic.pause(pulseHold)
            }
        } else {
            analogStep = (begBrightness - endBrightness) / stepCount
            laserLevel = begBrightness
            while (laserLevel >= endBrightness) {
                pins.analogWritePin(pin, laserLevel)
                laserLevel = laserLevel - analogStep
                basic.pause(pulseHold)
            }
        }
    }


    function RJpin_to_analog(Rjpin: AnalogRJPin): any {
        let pin = AnalogPin.P1
        switch (Rjpin) {
            case AnalogRJPin.J1:
                pin = AnalogPin.P1
                break;
            case AnalogRJPin.J2:
                pin = AnalogPin.P2
                break;
        }
        return pin
    }

    function RJpin_to_digital(Rjpin: DigitalRJPin): any {
        let pin = DigitalPin.P1
        switch (Rjpin) {
            case DigitalRJPin.J1:
                pin = DigitalPin.P8
                break;
            case DigitalRJPin.J2:
                pin = DigitalPin.P12
                break;
            case DigitalRJPin.J3:
                pin = DigitalPin.P14
                break;
            case DigitalRJPin.J4:
                pin = DigitalPin.P16
                break;
            case DigitalRJPin.P0:
                pin = DigitalPin.P0
                break;
            case DigitalRJPin.P1:
                pin = DigitalPin.P1
                break;
            case DigitalRJPin.P2:
                pin = DigitalPin.P2
                break;
            case DigitalRJPin.P3:
                pin = DigitalPin.P3
                break;
            case DigitalRJPin.P4:
                pin = DigitalPin.P4
                break;
            case DigitalRJPin.P4:
                pin = DigitalPin.P4
                break;
            case DigitalRJPin.P5:
                pin = DigitalPin.P5
                break;
            case DigitalRJPin.P6:
                pin = DigitalPin.P6
                break;
            case DigitalRJPin.P7:
                pin = DigitalPin.P7
                break;
            case DigitalRJPin.P8:
                pin = DigitalPin.P8
                break;
            case DigitalRJPin.P9:
                pin = DigitalPin.P9
                break;
            case DigitalRJPin.P10:
                pin = DigitalPin.P10
                break;
            case DigitalRJPin.P11:
                pin = DigitalPin.P11
                break;
            case DigitalRJPin.P12:
                pin = DigitalPin.P12
                break;
            case DigitalRJPin.P13:
                pin = DigitalPin.P13
                break;
            case DigitalRJPin.P14:
                pin = DigitalPin.P14
                break;
            case DigitalRJPin.P15:
                pin = DigitalPin.P15
                break;
            case DigitalRJPin.P16:
                pin = DigitalPin.P16
                break;
        }
        return pin
    }

    function RJpin_to_Serial(Rjpin: DigitalRJPin): any {
        let pin = SerialPin.USB_TX
        switch (Rjpin) {
            case DigitalRJPin.J1:
                pin = SerialPin.P8
                break;
            case DigitalRJPin.J2:
                pin = SerialPin.P12
                break;
            case DigitalRJPin.J3:
                pin = SerialPin.P14
                break;
            case DigitalRJPin.J4:
                pin = SerialPin.P16
                break;
            case DigitalRJPin.P0:
                pin = SerialPin.P0
                break;
            case DigitalRJPin.P1:
                pin = SerialPin.P1
                break;
            case DigitalRJPin.P2:
                pin = SerialPin.P2
                break;
            case DigitalRJPin.P8:
                pin = SerialPin.P8
                break;
            case DigitalRJPin.P12:
                pin = SerialPin.P12
                break;
            case DigitalRJPin.P13:
                pin = SerialPin.P13
                break;
            case DigitalRJPin.P14:
                pin = SerialPin.P14
                break;
            case DigitalRJPin.P15:
                pin = SerialPin.P15
                break;
            case DigitalRJPin.P16:
                pin = SerialPin.P16
                break;
        }
        return pin
    }




    //% blockId=notlegos_pot_read
    //% subcategory="MP3" group="MP3"
    //% block="Trimpot %mbPin analog value"
    //% mbPin.fieldEditor="gridpicker"
    export function potRead() {
        if(isPot){
            return Math.round(pins.map(pins.analogReadPin(potPin), 0, 1023, 0, 30))
        } else{
            return 5
        }
    }

    //% blockId=notlegos_pot_set
    //% subcategory="MP3" group="MP3"
    //% block="Connect Volume Control Pot at pin %aPin"
    //% mbPin.fieldEditor="gridpicker"
    export function potSet(aPin: AnalogPin): void{
        potPin = aPin
        isPot = true
    }


    //% blockId=notlegos_mp3_ports_set
    //% subcategory="MP3" group="MP3"
    //% block="Connect MP3 bit at pin %dPin"
    //% mbPin.fieldEditor="gridpicker"
    export function mp3setPorts(sPin: SerialPin): void {
        if (mp3bits == 0){
            mp3Apin = sPin
            mp3bits = 1
        } else if (mp3bits == 1){
            mp3Bpin = sPin
            mp3bits = 2
        } else if (mp3bits == 2){
            mp3Cpin = sPin
            mp3bits = 3
        }
    }

    function sendMP3volume(sPin: SerialPin): void{
        let theVolume = 5
        if (sPin == mp3Apin){
            theVolume = potRead() * mp3Avolume
        } else if (sPin == mp3Bpin){
            theVolume = potRead() * mp3Bvolume
        }
        serial.redirect(sPin, SerialPin.USB_RX, BaudRate.BaudRate9600)
        CMD = 6
        para1 = 0
        para2 = theVolume
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendData()
    }

    function sendMP3play(folderNum: string, fileNum: string, sPin: SerialPin): void {
        serial.redirect(sPin, SerialPin.USB_RX, BaudRate.BaudRate9600)
        CMD = 15
        para1 = parseInt(folderNum)
        para2 = parseInt(fileNum)
        dataArr[3] = CMD
        dataArr[5] = para1
        dataArr[6] = para2
        mp3_checkSum()
        mp3_sendDataFast()
    }

    //% blockId="playFolderFile" 
    //% block="play the mp3 in the folder:$folderNum filename:$fileNum"
    //% fileNum.defl="01" folderNum.defl="01"
    //% subcategory=MP3 group="MP3"
    export function playFolderFile(folderNum: string, fileNum: string): void {
    
        if (mp3bits > 0) {
            sendMP3volume(mp3Apin)
        }
        if (mp3bits > 1) {
            sendMP3volume(mp3Bpin)
        }
        if (mp3bits >0) {
            sendMP3play(folderNum, fileNum, mp3Apin)
        }
        if (mp3bits > 1) {
            sendMP3play(folderNum, fileNum, mp3Bpin)
        }
    }


    //% blockId="playsFor" 
    //% block="playsFor playString:$soundString"
    //% soundString.defl="1_1_25_100"
    //% subcategory=MP3 group="MP3"
    export function playsFor(soundString: string): number {
        
        let sPin = SerialPin.P0

        stringParts = soundString.split("_")
        let theFolder = stringParts[0]
        let theFile = stringParts[1]
        
       if (lastMP3bit == "A") {
            sPin = mp3Bpin
            mp3Bvolume = pins.map(parseInt(stringParts[2]), 0, 100, 0, 1)
            lastMP3bit = "B"
        } else {
            sPin = mp3Apin
            mp3Avolume = pins.map(parseInt(stringParts[2]), 0, 100, 0, 1)
           lastMP3bit = "A"
        }
        let theLength = stringParts[3]
        sendMP3volume(sPin)
        sendMP3play(theFolder, theFile, sPin)
        return parseFloat(theLength) * 1000
    }



    ///////////////////////////////enum
    export enum DigitalRJPin {
        //% block="J1"
        J1,
        //% block="J2"
        J2,
        //% block="J3"
        J3,
        //% block="J4"
        J4,
        //% block="J5"
        J5,
        //% block="P0"
        P0,
        //% block="P1"
        P1,
        //% block="P2"
        P2,
        //% block="P3"
        P3,
        //% block="P4"
        P4,
        //% block="P5"
        P5,
        //% block="P6"
        P6,
        //% block="P7"
        P7,
        //% block="P8"
        P8,
        //% block="P9"
        P9,
        //% block="P10"
        P10,
        //% block="P11"
        P11,
        //% block="P12"
        P12,
        //% block="P13"
        P13,
        //% block="P14"
        P14,
        //% block="P15"
        P15,
        //% block="P16"
        P16,
    }

    export enum mbPin {
        //% block="P0"
        P0,
        //% block="P1 (Analog J1)"
        P1,
        //% block="P2 (Analog J2)"
        P2,
        //% block="P3"
        P3,
        //% block="P4"
        P4,
        //% block="P5"
        P5,
        //% block="P6"
        P6,
        //% block="P7"
        P7,
        //% block="P8 (J1)"
        P8,
        //% block="P9"
        P9,
        //% block="P10"
        P10,
        //% block="P11"
        P11,
        //% block="P12 (J2)"
        P12,
        //% block="P13"
        P13,
        //% block="P14 (J3)"
        P14,
        //% block="P15"
        P15,
        //% block="P16 (J4)"
        P16,
    }

    export enum AnalogRJPin {
        //% block="J1"
        J1,
        //% block="J2"
        J2
    }

    export enum playType {
        //% block="Play"
        Play = 0x0D,
        //% block="Stop"
        Stop = 0x16,
        //% block="PlayNext"
        PlayNext = 0x01,
        //% block="PlayPrevious"
        PlayPrevious = 0x02,
        //% block="Pause"
        Pause = 0x0E
    }
    let lastPort = DigitalRJPin.P14
}