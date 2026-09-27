package com.orbitakidx.inglex;

import android.os.Bundle;
import com.getcapacitor.BridgeActivity;

public class MainActivity extends BridgeActivity {
    @Override
    public void onCreate(Bundle savedInstanceState) {
        registerPlugin(OrbitakidxBillingPlugin.class);
        registerPlugin(OrbitakidxSpeechPlugin.class);
        super.onCreate(savedInstanceState);
    }
}
