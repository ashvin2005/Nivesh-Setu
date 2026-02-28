from datetime import datetime, timedelta
def parse_timeframe(tf):

    end = datetime.today()

    if tf == "1M":
        start = end - timedelta(days=30)
    elif tf == "3M":
        start = end - timedelta(days=90)
    elif tf == "6M":
        start = end - timedelta(days=180)
    elif tf == "1Y":
        start = end - timedelta(days=365)
    elif tf == "5Y":
        start = end - timedelta(days=365*5)
    else:
        start = end - timedelta(days=365)

    return start.strftime("%Y-%m-%d"), end.strftime("%Y-%m-%d")