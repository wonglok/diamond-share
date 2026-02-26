const uniforms = {}
uniforms["normalCube"] = { value: this.normal.texture };
uniforms["bDebugBounces"] = { value: 0 };

uniforms["mFresnelBias"] = { value: 0.02 };
uniforms["mFresnelScale"] = { value: 0.1 };
uniforms["mFresnelPower"] = { value: 1 };

uniforms["aberration"] = { value: 0.012 };
uniforms["refraction"] = { value: 2.417 };

uniforms["normalOffset"] = { value: 0.0 };
uniforms["squashFactor"] = { value: 0.98 };
uniforms["distanceOffset"] = { value: 0 };
uniforms["geometryFactor"] = { value: 0.28 };

uniforms["absorbption"] = { value: new Color(0, 0, 0) };
uniforms["correction"] = { value: new Color(o.color || 0xFFFFFF) };
uniforms["boost"] = { value: new Color(.892, .892, .98595025) };

uniforms["radius"] = { value: 1.5 };
uniforms["centreOffset"] = { value: new Vector3(0, 0, 0) };

