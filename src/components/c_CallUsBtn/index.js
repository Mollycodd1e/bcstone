export const C_CallUsBtn = () => {
    const { isActivate }= true;
    function callWidget() {
        Comagic.openSitePhonePanel();
    }

    return (
        <div className="call-us" onClick={callWidget}>
            <div className="phone-label__bubble phone-label__bubble--empty-outer
          phone-label__bubble--empty-outer-animation events-none"/>
            <div className="phone-label__bubble phone-label__bubble--empty-inner
          phone-label__bubble--empty-inner-animation events-none"/>
            <div
                className="phone-label__bubble phone-label__bubble--solid
              phone-label__bubble--solid-color phone-label__bubble--solid-animation events-none"/>
            <div
                className="phone-label__bubble phone-label__bubble--solid
              phone-label__bubble--solid-color events-none"/>
            <i className="call-us__icon call-us__icon--not-shaded call-us__icon events-none"/>
            <div className="phone-label__bubble phone-label__bubble--solid"/>
        </div>
    )
}