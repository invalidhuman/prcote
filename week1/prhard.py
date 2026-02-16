def solution(genres, plays):
    
    total_plays = {} # 장르별로 총 재생
    songs_by_genre = {} # ex. {classic:[[0,500],[1.300]], }

    for i in range(len(genres)):
        genre = genres[i]
        play = plays[i]
        
        if genre in total_plays.keys():
            total_plays[genre] += play
            songs_by_genre[genre].append([i,play]) 
        else:
            total_plays[genre] = play
            songs_by_genre[genre] = [[i, play]]
            
    sorted_genres = sorted(total_plays.items(), key=lambda x:x[1],reverse = True)
    
    answer = []
    
    for genre, _ in sorted_genres:
        songs = songs_by_genre[genre]
        songs.sort(key=lambda x:(-x[1],x[0]))
        
        for s in songs[:2]:
            answer.append(s[0])
        

    return answer