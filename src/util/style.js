const style = {
  layout: (alignItems = 'flex-start', justifyContent = 'flex-start') => ({
    alignItems,
    justifyContent,
  }),
  center: () => ({
    alignItems: 'center',
    justifyContent: 'center',
  }),
  size: (width, height) => {
    const tempStyle = {};
    if (typeof width === 'number') {
      tempStyle.width = width;
    }
    if (typeof height === 'number') {
      tempStyle.height = height;
    }
    return tempStyle;
  },
  margin: (top, right, bottom, left) => {
    if (arguments.length == 1) {
      return {
        marginTop: top,
        marginRight: top,
        marginBottom: top,
        marginLeft: top,
      }
    } else if (arguments.length == 2) {
      return {
        marginTop: top,
        marginRight: right,
        marginBottom: top,
        marginLeft: right,
      }
    } else if (arguments.length == 3) {
      return {
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: right,
      }
    } else if (arguments.length >= 4) {
      return {
        marginTop: top,
        marginRight: right,
        marginBottom: bottom,
        marginLeft: left,
      }
    } else {
      return {
        marginTop: 0,
        marginRight: 0,
        marginBottom: 0,
        marginLeft: 0,
      }
    }
  },
  padding: (top, right, bottom, left) => {
    if (arguments.length == 1) {
      return {
        paddingTop: top,
        paddingRight: top,
        paddingBottom: top,
        paddingLeft: top,
      }
    } else if (arguments.length == 2) {
      return {
        paddingTop: top,
        paddingRight: right,
        paddingBottom: top,
        paddingLeft: right,
      }
    } else if (arguments.length == 3) {
      return {
        paddingTop: top,
        paddingRight: right,
        paddingBottom: bottom,
        paddingLeft: right,
      }
    } else if (arguments.length >= 4) {
      return {
        paddingTop: top,
        paddingRight: right,
        paddingBottom: bottom,
        paddingLeft: left,
      }
    } else {
      return {
        paddingTop: 0,
        paddingRight: 0,
        paddingBottom: 0,
        paddingLeft: 0,
      }
    }
  },
  radius: (value = 0) => ({
    borderRadius: value,
  }),
  border: (direction = 'all', width = 1, color = 'black', style = 'solid') => {
    const tempStyle = {};
    if (direction === 'all') {
      tempStyle.borderWidth = width;
      tempStyle.borderColor = color;
      tempStyle.borderStyle = style;
    }
    else {
      const directions = direction.split(' ');
      for (const d of directions) {
        if (/Top|Right|Bottom|Left/.test(d)) {
          tempStyle[`border${d}Width`] = width;
          tempStyle[`border${d}Color`] = color;
          tempStyle.borderStyle = style;
        }
      }
    }
    return tempStyle;
  },
  flex: (value = 1) => ({
    flex: value,
  }),
  bgColor: (color = 'white') => ({
    backgroundColor: color,
  }),
  color: (color = 'white') => ({
    color,
  }),
  /**
     * alignSelf: String
     * one of [auto, baseline, center, flex-start, flex-end, stretch], default is stretch
     */
  alignSelf: (alignSelf = 'stretch') => ({
    alignSelf,
  }),
  textAlign: (textAlign = 'center') => ({
    textAlign,
  }),
  font: (size = 14, height, weight = 'normal') => ({
    fontSize: size,
    lineHeight: height || size,
    fontWeight: weight,
  }),
  position: (mode = 'absolute', top, right, bottom, left) => {
    const tempStyle = { position: mode };
    if (typeof top === 'number') {
      tempStyle.top = top;
    }
    if (typeof right === 'number') {
      tempStyle.right = right;
    }
    if (typeof bottom === 'number') {
      tempStyle.bottom = bottom;
    }
    if (typeof left === 'number') {
      tempStyle.left = left;
    }
    return tempStyle;
  },
  direction: (direction = 'row') => ({
    flexDirection: direction,
  }),
}

module.exports = style;