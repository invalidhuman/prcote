def solution(wallpaper):
    
    left = 0
    right = 0
    top = 0
    bottom = 0

    lux = []
    luy = []

    for r,i in enumerate(wallpaper):
        temp = i.find("#")
        while (temp != -1):
            lux.append(temp)
            luy.append(r)
            i = i[:temp] + "." + i[temp+1:]
            # print(i)
            temp = i.find("#")


    answer = [
        min(luy), 
        min(lux), 
        max(luy) + 1, 
        max(lux) + 1
    ]

    return answer


# 최단거리

# 드래그
wallpaper = [".###.", "..#..", "...#."]

left = 0
right = 0
top = 0
bottom = 0

lux = []
luy = []

for i in wallpaper:
    temp = i.find("#")
    while (temp != -1):
        lux.append(i.find("#"))
        luy.append(i)
        i = i[:temp] + "." + i[temp+1:]
        # print(i)
        temp = i.find("#")
        print(lux)
        print(luy)

    
    
# 각각이 이중리스트라고 생각하는 게 나을려나
# (0,1) (3,4) -> (left,top) (right,bottom)

