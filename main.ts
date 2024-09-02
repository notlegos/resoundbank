function takeReplenish (Playlist: any[], Soundbank: any[]) {
    returnSound = ""
    if (Playlist.length == 0) {
        for (let index = 0; index <= Soundbank.length - 1; index++) {
            if (index == 0) {
                Playlist.push(Soundbank[index])
            } else if (index >= 1) {
                Playlist.insertAt(randint(0, index), Soundbank[index])
            }
        }
    }
    returnSound = Playlist.shift()
    return returnSound
}
function setSounds (player: string) {
    soundStrings = []
    if (player == "Mario") {
        soundStrings = MarioSoundString.split("|")
        series = "SMB"
    }
    if (series == "SMB") {
        PlayerIntroMusic = MarioIntroMusic
        PlayerTutorialMusic = MarioTutorialMusic
        PlayerAwaitingMusic = MarioAwaitingMusic
        PlayerLevelMusic = MarioLevelMusic
        PlayerWonMusic = MarioWonMusic
        PlayerLostMusic = MarioLostMusic
    }
    for (let value22 of soundStrings) {
        thisLetter = value22.charAt(0)
        theSound = value22.substr(2, value22.length - 2)
        if (thisLetter == "A") {
            PlayerName.push(theSound)
        } else if (thisLetter == "R") {
            PlayerReady.push(theSound)
        } else if (thisLetter == "Y") {
            PlayerYay.push(theSound)
        } else if (thisLetter == "I") {
            PlayerIntro.push(theSound)
        } else if (thisLetter == "N") {
            PlayerNay.push(theSound)
        } else if (thisLetter == "O") {
            let PlayerOuch: string[] = []
            PlayerOuch.push(theSound)
        } else if (thisLetter == "S") {
            PlayerSuccess.push(theSound)
        } else if (thisLetter == "F") {
            PlayerFailure.push(theSound)
        } else if (thisLetter == "W") {
            PlayerWon.push(theSound)
        } else if (thisLetter == "L") {
            PlayerLost.push(theSound)
        } else if (thisLetter == "H") {
            PlayerHurry.push(theSound)
        }
    }
}
function getSoundString (Category: string, Type: string) {
    if (Category == "Voice") {
        returnString = VoiceTracks[parseFloat(Type)]
    } else if (Category == "Player") {
        if (Type == "Name") {
            returnString = takeReplenish(PlaylistName, PlayerName)
        } else if (Type == "Intro") {
            returnString = takeReplenish(PlaylistIntro, PlayerIntro)
        } else if (Type == "Ready") {
            returnString = takeReplenish(PlaylistReady, PlayerReady)
        } else if (Type == "Yay") {
            returnString = takeReplenish(PlaylistYay, PlayerYay)
        } else if (Type == "Success") {
            returnString = takeReplenish(PlaylistSuccess, PlayerSuccess)
        } else if (Type == "Nay") {
            returnString = takeReplenish(PlaylistNay, PlayerNay)
        } else if (Type == "Failure") {
            returnString = takeReplenish(PlaylistFailure, PlayerFailure)
        } else if (Type == "Won") {
            returnString = takeReplenish(PlaylistWon, PlayerWon)
        } else if (Type == "Lost") {
            returnString = takeReplenish(PlaylistLost, PlayerLost)
        } else if (Type == "Hurry") {
            returnString = takeReplenish(PlaylistHurry, PlayerHurry)
        }
    } else if (Category == "SFX") {
        if (Type == "Correct") {
            returnString = takeReplenish(PlaylistCorrect, CorrectSFX)
        } else if (Type == "Incorrect") {
            returnString = takeReplenish(PlaylistIncorrect, IncorrectSFX)
        } else if (Type == "Ghost") {
            returnString = takeReplenish(PlaylistGhost, GhostSFX)
        } else if (Type == "Fire") {
            returnString = takeReplenish(PlaylistFire, FireSFX)
        } else if (Type == "Explosion") {
            returnString = takeReplenish(PlaylistExplosion, ExplosionSFX)
        } else if (Type == "Splash") {
            returnString = takeReplenish(PlaylistSplash, SplashSFX)
        } else if (Type == "Spark") {
            returnString = takeReplenish(PlaylistSpark, SparkSFX)
        } else if (Type == "Slash") {
            returnString = takeReplenish(PlaylistSlash, SlashSFX)
        }
    } else if (Category == "Music") {
        if (Type == "Intro") {
            let PlaylistIntroMusic: number[] = []
            returnString = takeReplenish(PlaylistIntroMusic, PlayerIntroMusic)
        } else if (Type == "Tutorial") {
            let PlaylistTutorialMusic: number[] = []
            returnString = takeReplenish(PlaylistTutorialMusic, PlayerTutorialMusic)
        } else if (Type == "Awaiting") {
            returnString = takeReplenish(PlaylistAwaitingMusic, PlayerAwaitingMusic)
        } else if (Type == "Level") {
            let PlaylistLevelMusic: number[] = []
            returnString = takeReplenish(PlaylistLevelMusic, PlayerLevelMusic)
        } else if (Type == "Won") {
            let PlaylistWonMusic: number[] = []
            returnString = takeReplenish(PlaylistWonMusic, PlayerWonMusic)
        } else if (Type == "Lost") {
            let PlaylistLostMusic: number[] = []
            returnString = takeReplenish(PlaylistLostMusic, PlayerLostMusic)
        }
    }
    return returnString
}
let returnString = ""
let PlayerHurry: string[] = []
let PlayerLost: string[] = []
let PlayerWon: string[] = []
let PlayerFailure: string[] = []
let PlayerSuccess: string[] = []
let PlayerNay: string[] = []
let PlayerIntro: string[] = []
let PlayerYay: string[] = []
let PlayerReady: string[] = []
let PlayerName: string[] = []
let theSound = ""
let thisLetter = ""
let PlayerLostMusic: string[] = []
let PlayerWonMusic: string[] = []
let PlayerLevelMusic: string[] = []
let PlayerAwaitingMusic: string[] = []
let PlayerTutorialMusic: string[] = []
let PlayerIntroMusic: string[] = []
let soundStrings: string[] = []
let returnSound = ""
let series = ""
let MarioSoundString = ""
let MarioLostMusic: string[] = []
let MarioWonMusic: string[] = []
let MarioLevelMusic: string[] = []
let MarioAwaitingMusic: string[] = []
let MarioTutorialMusic: string[] = []
let MarioIntroMusic: string[] = []
let SlashSFX: string[] = []
let SparkSFX: string[] = []
let SplashSFX: string[] = []
let ExplosionSFX: string[] = []
let FireSFX: string[] = []
let GhostSFX: string[] = []
let IncorrectSFX: string[] = []
let CorrectSFX: string[] = []
let VoiceTracks: string[] = []
let PlaylistAwaitingMusic: number[] = []
let PlaylistCorrect: number[] = []
let PlaylistIncorrect: number[] = []
let PlaylistGhost: number[] = []
let PlaylistFire: number[] = []
let PlaylistExplosion: number[] = []
let PlaylistSplash: number[] = []
let PlaylistSpark: number[] = []
let PlaylistSlash: number[] = []
let PlaylistName: number[] = []
let PlaylistReady: number[] = []
let PlaylistYay: number[] = []
let PlaylistIntro: number[] = []
let PlaylistNay: number[] = []
let PlaylistSuccess: number[] = []
let PlaylistFailure: number[] = []
let PlaylistWon: number[] = []
let PlaylistLost: number[] = []
let PlaylistHurry: number[] = []
let PlaylistOuch: number[] = []
let thisTrack = 0
let thisString = ""
PlaylistHurry = []
PlaylistLost = []
PlaylistWon = []
PlaylistFailure = []
PlaylistSuccess = []
PlaylistNay = []
PlaylistIntro = []
PlaylistYay = []
PlaylistReady = []
PlaylistName = []
PlaylistSlash = []
PlaylistSpark = []
PlaylistSplash = []
PlaylistExplosion = []
PlaylistFire = []
PlaylistGhost = []
PlaylistIncorrect = []
PlaylistCorrect = []
PlaylistAwaitingMusic = []
VoiceTracks = "10_1_90_1.75|10_2_90_3.65|10_3_90_11.5|10_4_90_0|10_5_90_0|10_6_90_4.65|10_7_90_7.15|10_8_90_4.8|10_9_90_3.75|10_10_90_5.05|10_11_90_0|10_12_90_0|10_13_90_3|10_14_90_3|10_15_90_3|10_16_90_4|10_17_90_0|10_18_90_3|10_19_90_3|10_20_90_4|10_21_90_2|10_22_90_0|10_23_90_2|10_24_90_2|10_25_90_6|10_26_90_6|10_27_90_6|10_28_90_6|10_29_90_6|10_30_90_6|10_31_90_6|10_32_90_6|10_33_90_8|10_34_90_9|10_35_90_6|10_36_90_6|10_37_90_6|10_38_90_6|10_39_90_6|10_40_90_6".split("|")
CorrectSFX = "7_1_100_4|7_2_100_8|7_3_100_8|7_4_100_6|7_5_100_10|7_6_100_8|7_7_100_6|7_8_100_4|7_9_100_17|7_10_100_9|7_11_100_4|7_12_100_8|7_13_100_12|7_14_100_7|7_15_100_10|7_16_100_9|7_17_100_10|7_18_100_9|7_19_100_8|7_20_100_4|7_21_100_7|7_22_100_26|7_23_100_5|7_24_100_4|7_25_100_10|7_26_100_7|7_27_100_7|7_28_100_6|7_29_100_7|7_30_100_7|7_31_100_12|7_32_100_4|7_33_100_6|7_34_100_6|7_35_100_6|7_36_100_6|7_37_100_5|7_38_100_3|7_39_100_6|7_40_100_6|7_41_100_6|7_42_100_8|7_43_100_6|7_44_100_8|7_45_100_6|7_46_100_5|7_47_100_5|7_48_100_12|7_49_100_3|7_50_100_7|7_51_100_8|7_52_100_11|7_53_100_6|7_54_100_2|7_55_100_5|7_56_100_7|7_57_100_8|7_58_100_7|7_59_100_6|7_60_100_7|7_61_100_6|7_62_100_8|7_63_100_5|7_64_100_5|7_65_100_7|7_66_100_9|7_67_100_6|7_68_100_6|7_69_100_7|7_70_100_10|7_71_100_7|7_72_100_5|7_73_100_6|7_74_100_8|7_75_100_3|7_76_100_3|7_77_100_6|7_78_100_7|7_79_100_4|7_80_100_6|7_81_100_2|7_82_100_3|7_83_100_3|7_84_100_1|7_85_100_3|7_86_100_6|7_87_100_7|7_88_100_5|7_89_100_3|7_90_100_5|7_91_100_3|7_92_100_3|7_93_100_2|7_94_100_3|7_95_100_3|7_96_100_1|7_99_100_1|7_100_100_1|7_101_100_1|7_102_100_1|7_103_100_1|7_104_100_3|7_105_100_1|7_106_100_1|7_107_100_4|7_108_100_4|7_109_100_1|7_110_100_1|7_111_100_1|7_112_100_1|7_113_100_1|7_114_100_2|7_115_100_1|7_116_100_1|7_117_100_1|7_118_100_1".split("|")
IncorrectSFX = "8_1_100_6|8_2_100_5|8_3_100_3|8_4_100_5|8_5_100_7|8_6_100_6|8_7_100_4|8_8_100_1|8_9_100_3|8_10_100_4|8_11_100_3|8_12_100_3|8_13_100_6|8_14_100_3|8_15_100_1|8_16_100_1|8_17_100_1|8_18_100_1|8_19_100_0|8_20_100_0|8_21_100_5|8_22_100_4|8_23_100_3|8_24_100_7".split("|")
let AllSFX = "9_1_100_4.754|9_2_100_4.336|9_3_100_5.172|9_4_100_4.806|9_5_100_4.754|9_6_100_1.536|9_7_100_2.136|9_8_100_1.896|9_9_100_2.592|9_10_100_0.936|9_11_100_1.008|9_12_100_0.312|9_13_100_1.44|9_14_100_1.8|9_15_100_1.992|9_16_100_1.104|9_17_100_1.08|9_18_100_0.912|9_19_100_0.528|9_20_100_0.72|9_21_100_0.672|9_22_100_0.696|9_23_100_0.6|9_24_100_0.576|9_25_100_1.44|9_26_100_1.8|9_27_100_1.464|9_28_100_0.432|9_29_100_0.312|9_30_100_2.112|9_31_100_0.648|9_32_100_0.384|9_33_100_2.352|9_34_100_1.8|9_35_100_1.608|9_36_100_0.648|9_37_100_0.768|9_38_100_0.552|9_39_100_0.48|9_40_100_1.032|9_41_100_0.456|9_42_100_0.384|9_43_100_0.552|9_44_100_0.432|9_45_100_0.216|9_46_100_0.624|9_47_100_1.248|9_48_100_1.104|9_49_100_1.248|9_50_100_0.648|9_51_100_0.456|9_53_100_5.256|9_54_100_2.328|9_55_100_4.992|9_56_100_1.776|9_57_100_2.28|9_58_100_0.504|9_59_100_0.984|9_60_100_0.984|9_61_100_0.504|9_62_100_1.632|9_63_100_0.288|9_64_100_0.192|9_65_100_0.168|9_66_100_0.288|9_67_100_0.288|9_68_100_0.312|9_69_100_0.72|9_70_100_0.672|9_71_100_0.648|9_72_100_0.648|9_73_100_1.632|9_74_100_1.416|9_75_100_1.248|9_76_100_0.48|9_77_100_0.36|9_78_100_0.216|9_79_100_0.576|9_80_100_0.731|9_81_100_1.128|9_82_100_2.184|9_83_100_0.744|9_84_100_0.6|9_85_100_1.152|9_86_100_1.68|9_87_100_1.32|9_88_100_0.528|9_89_100_0.36|9_90_100_0.792|9_91_100_2.496|9_92_100_1.8|9_93_100_1.8|9_94_100_0.744|9_95_100_1.776|9_96_100_5.544|9_97_100_0.432|9_98_100_2.064|9_99_100_0.744|9_100_100_0.696|9_101_100_1.776|9_102_100_0.12|9_103_100_0.168|9_104_100_0.96|9_105_100_0.96|9_106_100_2.04|9_107_100_3.984|9_108_100_1.608|9_109_100_3.528|9_110_100_0.456|9_111_100_0.696|9_112_100_1.632|9_113_100_2.232".split("|")
GhostSFX = "9_1_100_4.754|9_2_100_4.336|9_3_100_5.172|9_4_100_4.806".split("|")
FireSFX = "9_6_100_1.536|9_15_100_1.992|9_53_100_5.256|9_106_100_2.04".split("|")
ExplosionSFX = "9_77_100_0.36|9_101_100_1.776|9_109_100_3.528".split("|")
SplashSFX = "9_33_100_2.352|9_34_100_1.8".split("|")
SparkSFX = "9_5_100_4.754|9_51_100_0.456|9_85_100_1.152|9_86_100_1.68|9_111_100_0.696|9_112_100_1.632".split("|")
SlashSFX = "9_10_100_0.936|9_25_100_1.44|9_28_100_0.432|9_32_100_0.384|9_50_100_0.648|9_59_100_0.984|9_63_100_0.288|9_64_100_0.192|9_65_100_0.168|9_66_100_0.288|9_67_100_0.288|9_68_100_0.312|9_69_100_0.72|9_75_100_1.248|9_76_100_0.48|9_77_100_0.36|9_78_100_0.216|9_89_100_0.36".split("|")
MarioIntroMusic = "1_1_75_2.808|1_2_75_3.912|1_3_75_7.81|1_4_75_4.992|1_5_75_3.918|1_6_75_12.382|1_7_75_3.204|1_8_75_6.648|1_9_75_6.168|1_10_75_7.464|1_11_75_9.36|1_12_75_9.038|1_13_75_10.605|1_14_75_3.492|1_15_75_9.613|1_16_75_3.48|1_17_75_5.58|1_18_75_5.041|1_19_75_6.336|1_20_75_5.424|1_21_75_7.2|1_22_75_5.424|1_23_75_3.317|1_24_75_7.262|1_25_75_5.59|1_26_75_5.52|1_27_75_10.776|1_28_75_4.944|1_29_75_5.496|1_30_75_4.032|1_31_75_6.264|1_32_75_3.918|1_33_75_4.44|1_34_75_10.152|1_35_75_8.097|1_36_75_7.706|1_37_75_3.317|1_38_75_6.87|1_39_75_4.466|1_40_75_5.877|1_41_75_3.432|1_42_75_7.392|1_43_75_6.768|1_44_75_2.616|1_45_75_6.269|1_46_75_1.188|1_47_75_2.088|1_48_75_2.124|1_49_75_8.228|1_50_75_15.647|1_51_75_9.064|1_52_75_10.152|1_53_75_13.008|1_54_75_14.16|1_55_75_14.236|1_56_75_15.792|1_57_75_7.392|1_58_75_4.368|1_59_75_9.384|1_60_75_7.653|1_61_75_8.76|1_62_75_8.952|1_63_75_12.024|1_64_75_4.284|1_65_75_6.048|1_66_75_9.072|1_67_75_4.68|1_68_75_6.138|1_69_75_5.208|1_70_75_9.576|1_71_75_8.045|1_72_75_8.045|1_73_75_5.407|1_74_75_3.186".split("|")
MarioTutorialMusic = "2_1_65_36|2_2_65_40|2_3_65_41|2_4_65_46|2_5_65_50|2_6_65_51|2_7_65_59|2_8_65_63|2_9_65_64|2_10_65_65|2_11_65_66|2_12_65_67|2_13_65_68|2_14_65_69|2_15_65_76|2_16_65_80|2_17_65_84|2_18_65_90|2_19_65_92|2_20_65_100|2_21_65_103|2_22_65_105|2_23_65_112|2_24_65_113|2_25_65_123|2_26_65_138|2_27_65_142|2_28_65_144|2_29_65_156|2_30_65_158|2_31_65_120|2_32_65_120|2_33_65_120|2_34_65_120|2_35_65_120|2_36_65_120".split("|")
MarioAwaitingMusic = "3_1_100_64|3_2_100_211|3_3_100_185|3_4_100_185|3_5_100_182|3_6_100_114|3_7_100_181|3_8_100_103|3_9_100_303|3_10_100_21|3_11_100_235|3_12_100_121|3_13_100_203|3_14_100_119|3_15_100_206|3_16_100_146|3_17_100_237|3_18_100_210|3_19_100_160".split("|")
MarioLevelMusic = "4_1_100_128|4_3_100_142|4_5_100_111|4_6_100_141|4_9_100_126|4_11_100_132|4_15_100_119|4_16_100_146|4_18_100_120|4_20_100_143|4_22_100_142|4_23_100_112|4_24_100_138|4_25_100_139|4_26_100_111|4_27_100_116|4_28_100_129|4_31_100_98|4_32_100_146|4_33_100_177|4_34_100_82|4_36_100_160|4_38_100_180|4_39_100_211|4_41_100_134|4_42_100_183|4_43_100_124|4_44_100_261|4_45_100_91|4_46_100_138|4_49_100_207|4_50_100_41|4_51_100_180|4_52_100_202|4_53_100_194|4_56_100_209|4_57_100_195|4_58_100_180|4_60_100_198|4_61_100_180|4_63_100_78|4_66_100_139|4_67_100_224|4_68_100_180|4_73_100_180|4_76_100_180|4_77_100_196|4_78_100_113|4_82_100_180|4_83_100_123|4_84_100_180|4_86_100_126|4_93_100_121|4_97_100_59|4_98_100_180|4_99_100_180|4_100_100_118|4_101_100_156|4_102_100_180|4_103_100_70|4_104_100_216|4_105_100_140|4_106_100_180|4_107_100_147|4_108_100_147|4_109_100_180|4_110_100_158|4_111_100_180|4_112_100_80|4_113_100_152|4_114_100_127|4_116_100_122|4_118_100_106|4_123_100_143|4_124_100_36|4_125_100_164|4_127_100_282|4_128_100_311|4_129_100_123|4_130_100_187|4_131_100_62|4_132_100_180|4_133_100_130|4_134_100_112|4_135_100_105|4_139_100_126|4_141_100_176|4_142_100_135|4_143_100_126|4_144_100_144|4_145_100_140|4_146_100_133|4_149_100_167|4_150_100_120|4_151_100_180|4_155_100_226|4_157_100_164|4_158_100_144|4_159_100_104|4_161_100_180|4_162_100_87|4_163_100_126|4_164_100_118|4_165_100_194|4_166_100_135|4_167_100_50|4_168_100_109|4_169_100_180|4_170_100_133|4_171_100_180|4_172_100_91|4_173_100_138|4_176_100_120|4_177_100_81|4_178_100_150|4_179_100_153|4_180_100_104|4_181_100_112".split("|")
MarioWonMusic = "5_1_100_4|5_2_100_17|5_3_100_29|5_4_100_172|5_5_100_13|5_6_100_248|5_7_100_11|5_8_100_445|5_9_100_241|5_10_100_244|5_11_100_20|5_12_100_7|5_13_100_28|5_14_100_74|5_15_100_15|5_16_100_74|5_17_100_17|5_18_100_17|5_19_100_15|5_20_100_38|5_21_100_42|5_22_100_67|5_23_100_8|5_24_100_8|5_25_100_13|5_26_100_17|5_27_100_5|5_28_100_122|5_29_100_226|5_30_100_79".split("|")
MarioLostMusic = "6_1_100_87|6_2_100_31|6_3_100_196|6_4_100_65|6_5_100_4|6_6_100_23|6_7_100_65|6_8_100_62|6_9_100_78|6_10_100_6|6_11_100_162".split("|")
MarioSoundString = "A_21_1_100_1.5|A_21_2_100_1|I_21_3_100_3.3|A_21_4_100_1.9|A_21_5_100_2.1|I_21_6_100_1.8|I_21_7_100_1.8|R_21_8_100_0.6|R_21_9_100_1.3|R_21_10_100_1.1|R_21_11_100_0.6|R_21_12_100_0.8|R_21_13_100_1.6|R_21_14_100_1.3|R_21_15_100_1.2|R_21_16_100_1.1|R_21_17_100_1.3|R_21_18_100_1|Y_21_19_100_0.2|Y_21_20_100_0.2|Y_21_21_100_0.3|Y_21_22_100_0.5|Y_21_23_100_0.6|Y_21_24_100_0.6|Y_21_25_100_0.6|Y_21_26_100_0.6|Y_21_27_100_0.6|Y_21_28_100_0.6|Y_21_29_100_0.7|Y_21_30_100_0.7|Y_21_31_100_0.7|Y_21_32_100_0.7|Y_21_33_100_0.7|Y_21_34_100_0.8|Y_21_35_100_0.8|Y_21_36_100_0.8|Y_21_37_100_0.8|Y_21_38_100_0.8|Y_21_39_100_0.8|Y_21_40_100_0.9|Y_21_41_100_0.9|Y_21_42_100_0.9|Y_21_43_100_0.9|Y_21_44_100_0.9|Y_21_45_100_0.9|Y_21_46_100_0.9|Y_21_47_100_1|Y_21_48_100_1|Y_21_49_100_1|Y_21_50_100_1|Y_21_51_100_1.1|Y_21_52_100_1.1|Y_21_53_100_1.1|Y_21_54_100_1.2|Y_21_55_100_1.2|Y_21_56_100_1.2|Y_21_57_100_1.2|Y_21_58_100_1.3|Y_21_59_100_1.3|Y_21_60_100_1.3|Y_21_61_100_1.4|Y_21_62_100_1.4|S_21_63_100_1|S_21_64_100_1.6|S_21_65_100_1.7|S_21_66_100_1.7|S_21_67_100_1.9|S_21_68_100_2.1|S_21_69_100_2.2|S_21_70_100_2.4|S_21_71_100_2.4|S_21_72_100_2.5|W_21_73_100_1.8|W_21_74_100_2|W_21_75_100_2.2|W_21_76_100_2.6|W_21_77_100_2.9|O_21_78_100_0.6|O_21_79_100_0.4|O_21_80_100_0.4|O_21_81_100_1.1|O_21_82_100_1.5|O_21_83_100_0.8|O_21_84_100_0.7|O_21_85_100_0.8|O_21_86_100_0.9|O_21_87_100_1.3|O_21_88_100_0.5|O_21_89_100_1|O_21_90_100_1|O_21_91_100_0.4|O_21_92_100_0.5|O_21_93_100_0.9|O_21_94_100_0.4|O_21_95_100_0.4|N_21_96_100_1|N_21_97_100_1.1|N_21_98_100_1|N_21_99_100_0.6|N_21_100_100_0.9|N_21_101_100_1.4|N_21_102_100_1.7|N_21_103_100_1.3|N_21_104_100_0.6|N_21_105_100_1.4|N_21_106_100_0.8|N_21_107_100_1.1|N_21_108_100_1.1|N_21_109_100_0.8|N_21_110_100_1.7|N_21_111_100_2.4|I_21_112_100_0.8|I_21_113_100_0.9|F_21_114_100_1.1|F_21_115_100_2.5|F_21_116_100_2.5|F_21_117_100_1.4|L_21_118_100_3.4|L_21_119_100_3.5|L_21_120_100_4.4|L_21_121_100_1.5|H_21_122_100_44.4"
series = ""
Connected.oledClear()
notLegos.potSet(AnalogPin.P1)
notLegos.mp3setPorts(SerialPin.P14)
notLegos.mp3setPorts(SerialPin.P16)
setSounds("Mario")
basic.pause(notLegos.playsFor("1_1_100_1.5"))
basic.pause(notLegos.playsFor(getSoundString("Music", "Intro")))
basic.pause(notLegos.playsFor(getSoundString("Music", "Tutorial")))
basic.pause(notLegos.playsFor(getSoundString("SFX", "Spark")))
basic.pause(notLegos.playsFor(getSoundString("Player", "Nay")))
