package com.orbitakidx.inglex;

import android.speech.tts.TextToSpeech;

import com.getcapacitor.Plugin;
import com.getcapacitor.PluginCall;
import com.getcapacitor.PluginMethod;
import com.getcapacitor.annotation.CapacitorPlugin;

import java.util.Locale;

@CapacitorPlugin(name = "OrbitakidxSpeech")
public class OrbitakidxSpeechPlugin extends Plugin implements TextToSpeech.OnInitListener {
    private TextToSpeech textToSpeech;
    private boolean ready = false;

    @Override
    public void load() {
        textToSpeech = new TextToSpeech(getContext(), this);
    }

    @Override
    public void onInit(int status) {
        if (status != TextToSpeech.SUCCESS || textToSpeech == null) return;
        int language = textToSpeech.setLanguage(Locale.UK);
        ready = language != TextToSpeech.LANG_MISSING_DATA
            && language != TextToSpeech.LANG_NOT_SUPPORTED;
        textToSpeech.setSpeechRate(0.82f);
    }

    @PluginMethod
    public void speak(PluginCall call) {
        String text = call.getString("text", "").trim();
        if (text.isEmpty()) {
            call.reject("Falta la palabra que hay que pronunciar.");
            return;
        }
        if (!ready || textToSpeech == null) {
            call.reject("La voz inglesa no está disponible en el dispositivo.");
            return;
        }
        String language = call.getString("language", "en-GB");
        Locale locale = Locale.forLanguageTag(language);
        int result = textToSpeech.setLanguage(locale);
        if (result == TextToSpeech.LANG_MISSING_DATA
            || result == TextToSpeech.LANG_NOT_SUPPORTED) {
            call.reject("La voz inglesa no está instalada.");
            return;
        }
        textToSpeech.speak(text, TextToSpeech.QUEUE_FLUSH, null, "inglex-word");
        call.resolve();
    }

    @Override
    protected void handleOnDestroy() {
        if (textToSpeech != null) {
            textToSpeech.stop();
            textToSpeech.shutdown();
        }
    }
}
